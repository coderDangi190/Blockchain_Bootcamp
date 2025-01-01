const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./db/connect");
app.use(express.json());

const routes = require("./routes/routes");

connectDB(process.env.MONGO_URL);
async function dbms() {
  try {
    console.log("Database is connected.");
    app.listen(3000, () => {
      console.log("Server is running");
    });
  } catch (error) {
    console.log(error);
  }
}

dbms();
