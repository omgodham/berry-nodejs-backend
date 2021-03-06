const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
app.use(cors());
app.use("/users", require("./routes-js/user"));
mongoose
  .connect(process.env.MONGODB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connnected");
  })
  .catch((err) => {
    console.log(err, "Error Occured Connecting To DB");
  });

app.listen(process.env.PORT || 3003, () => {
  console.log("server running on port 3003");
});
