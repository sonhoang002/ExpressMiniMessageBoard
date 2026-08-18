const db = require("../database/queries");
const { validationResult } = require("express-validator");

exports.messagesAllGet = async (req, res) => {
  const messages = await db.getMessages();
  res.render("index", { title: "Mini Messageboard", messages: messages });
};

exports.messagePost = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render("form", {
      errors: errors.array(),
    });
  }

  await db.pushMessage(req.body.userName, req.body.userText, new Date());
  res.redirect("/");
};

exports.messageGet = async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id < 0) {
    return res.status(404).render("404");
  }

  const message = await db.getMessage(id);
  if (message.length === 0) {
    return res.status(404).render("404");
  }
  res.render("messageDetail", { messages: message[0] });
};

exports.newMessageGet = (req, res) => {
  res.render("form", {
    errors: [],
  });
};
