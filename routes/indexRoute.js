const express = require("express");
const indexRouter = express.Router({ mergeParams: true });
const indexController = require("../controller/indexController");
const { body } = require("express-validator");

indexRouter.get("/", indexController.messagesAllGet);

indexRouter.post(
  "/new",
  body("userName")
    .trim()
    .notEmpty()
    .withMessage("Username can't be empty.")
    .isLength({ max: 255 })
    .withMessage("Username must be 255 characters or fewer."),

  body("userText")
    .trim()
    .notEmpty()
    .withMessage("Message can't be empty.")
    .isLength({ max: 1000 })
    .withMessage("Message must be 1000 characters or fewer."),
  indexController.messagePost,
);

module.exports = indexRouter;
