const express = require("express");
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
const messages = require("./messages");

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use("/", indexRouter);
app.use("/new", newRouter);

app.get("/:text", (req, res) => {
  res.render("messagePage", {
    message: messages.find((message) => message.text === req.params.text),
  });
});

app.listen(3000, () => {
  console.log("App running");
});
