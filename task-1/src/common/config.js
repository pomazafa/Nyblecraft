const dotenv = require('dotenv')
const path = require('path')

dotenv.config({
  path: path.join(__dirname, '../../.env')
})

module.exports = {
  PORT: process.env.PORT,
  DATABASE: process.env.DATABASE,
  LOGIN: process.env.LOGIN,
  PASSWORD: process.env.PASSWORD,
  HOST: process.env.HOST
}
