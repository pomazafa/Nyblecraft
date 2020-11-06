const User = require('./user.model')
const multer = require("multer");
const fs = require("fs");


const get = (req, res) => {
    const name = req.params.name;
    const user = User.findOne({firstName:name}).then(() => {
        console.log(user)
    })
}
const create = (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;

    try {
        if (req.file == undefined) {
            return res.status(400).send(`You must select a file.`);
        }

        User.create({
        firstName: firstname,
        lastName: lastname,
        image: fs.readFileSync(
            "./static/assets/uploads/" + req.filename
        ),
        }).then(() => {
        return res.status(200).send(`File has been uploaded.`);
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send(`Error when trying upload images: ${error}`);
    }
}

module.exports = { get, create }
