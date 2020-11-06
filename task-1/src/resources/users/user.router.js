const express = require("express");
const userService = require("./user.service");
const userRouter = express.Router();

userRouter.get("/:firstname", userService.get);

module.exports = userRouter;
