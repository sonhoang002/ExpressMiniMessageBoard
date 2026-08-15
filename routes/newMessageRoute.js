const express = require("express");
const newMessageRouter = express.Router();

newMessageRouter.get("/", (req, res) => {
  res.render("form");
});

module.exports = newMessageRouter;
