const express = require("express");
const newMessageRouter = express.Router();
const indexController = require("../controller/indexController");

newMessageRouter.get("/", indexController.newMessageGet);
module.exports = newMessageRouter;
