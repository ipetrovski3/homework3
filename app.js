const express = require("express");
const app = express();
const appRoutes = require("./routes/index.routes");

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(express.json());

app.use(appRoutes);

module.exports = app;
