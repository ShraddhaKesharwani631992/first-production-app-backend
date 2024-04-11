require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("My first full fledged application");
});

app.listen(port, () => console.log("App listens at port", port));
