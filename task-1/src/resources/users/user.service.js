const User = require('./user.model')
const fs = require("fs");
const PDFDocument = require('pdfkit')
const getStream = require('get-stream')

const get = async (req, res) => {
    try{
        const name = req.params.name;
        const user = await User.findOne({firstName:name}).then(user => {
            return user;
        })
        const doc = new PDFDocument();

        let filename = `./static/assets/uploads/${user.firstName}_${user.lastName}_${Date.now()}.pdf`;
        const content = `${user.firstName}-${user.lastName}`;
        doc.pipe(fs.createWriteStream(filename));    
        doc.y = 300;
        doc.text(content, 50, 50);
        doc.image(user.image, {fit: [500, 400], align: 'center',valign: 'center'});

        doc.end();
        await user.update({pdf:await getStream.buffer(doc)});

        res.json({success:true})
    } catch {
        res.json({success:false})
    }
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
        console.error(error);
        return res.status(500).send(`Error when trying upload images: ${error}`);
    }
}

module.exports = { get, create }
