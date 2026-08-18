const express = require("express");
const itemRoute = express.Router();
const indexController = require("../controller/indexController");
const db = require("../database/queries");

itemRoute.get("/:id", indexController.messageGet);

module.exports = itemRoute;
