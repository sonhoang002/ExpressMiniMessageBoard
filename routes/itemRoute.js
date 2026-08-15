const { messages } = require("./indexRoute");
const express = require("express");
const itemRoute = express.Router();

itemRoute.get("/:id", (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id < 0 || id >= messages.length) {
    return res.status(404).render("404");
  }

  res.render("messageDetail", { messages: messages[id] });
});

module.exports = itemRoute;
