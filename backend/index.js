const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = express();

app.use(bodyParser.json());

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.3dwqjjw.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log("db is connected");
    app.listen(8000, () => {
      console.log('Listening on port 8000');
  });
  })
  .catch((err) => {
    console.log(err);
  });
