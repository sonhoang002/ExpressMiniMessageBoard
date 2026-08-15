const express = require("express");
const { indexRouter } = require("./routes/indexRoute");
const newMessageRouter = require("./routes/newMessageRoute");
const itemRoute = require("./routes/itemRoute");
const path = require("node:path");

const app = express();

// Connect with the Views folder and use ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Extract POST contents
app.use(express.urlencoded({ extended: true }));

// Connect routes to these paths
app.use("/", indexRouter);
app.use("/new", newMessageRouter);
app.use("/:id", itemRoute);

const PORT = 3000;

app.listen(PORT, console.log(`Listening on port ${PORT}`));
