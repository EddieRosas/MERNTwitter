const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require('./config/keys').mongoURI;


app.get("/", (req, res) => res.send("cahnge"));

mongoose
  .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));