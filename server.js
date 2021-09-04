const express = require("express");
const connectDB = require("./config/db");

// require and use config files
require("dotenv").config({ path: "./config/.env" });
connectDB();

const app = express();

// express body parser

app.use(express.json());

const PORT = process.env.PORT || 5000;
// listen to a port
app.listen(PORT, () =>
  console.log(
    `server up and running on ${process.env.NODE_ENV} MODE at ${PORT}`
  )
);
