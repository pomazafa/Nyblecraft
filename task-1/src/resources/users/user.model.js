const { Sequelize, DataTypes } = require('sequelize');
const {DATABASE, LOGIN, PASSWORD} = require('../../common/config');

let sequelize = new Sequelize("", LOGIN, PASSWORD, {
    dialect: "mysql"
  });

// const sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL || `mysql://${LOGIN}:${PASSWORD}@localhost:3306/${DATABASE}`);

sequelize.query(`CREATE DATABASE IF NOT EXISTS ${DATABASE};`)

sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL || `mysql://${LOGIN}:${PASSWORD}@localhost:3306/${DATABASE}`);

sequelize.sync().then(() => {
    console.log('sync done');
});

try {
    sequelize.authenticate()
        .then(() => {
            console.log('Connection successfull');
        })
} catch (e) {
    console.error(e);
}

module.exports = sequelize.define('User', {
        firstName: {
          type: DataTypes.STRING,
          allowNull: false
        },
        lastName: {
          type: DataTypes.STRING,
          allowNull: false
        },
        image: {
            type: DataTypes.BLOB,
            allowNull: false
        },
        pdf: {
            type: DataTypes.BLOB,
        }
      }, {
        sequelize,
        modelName: 'User',
        tableName: 'Users',
        timestamps: false
      });