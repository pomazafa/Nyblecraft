const express = require("express");
const path = require('path');
const userService = require("./user.service");
const userRouter = express.Router();
const upload = require("../../middleware/upload");

userRouter.get('/create', (req, res) => {return res.sendFile(path.join(`${__dirname}/../../views/addUser.html`));})
userRouter.post("/create", upload.single("file"), userService.create);
userRouter.get("/:firstname", userService.get);

module.exports = userRouter;
