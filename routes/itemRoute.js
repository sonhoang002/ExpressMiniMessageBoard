const { messages } = require("./indexRoute");
const express = require("express");
const itemRoute = express.Router({ mergeParams: true });

itemRoute.get("/", (req, res) => {
  res.render("messageDetail", { id: req.params.id, messages: messages });
});

module.exports = itemRoute;
