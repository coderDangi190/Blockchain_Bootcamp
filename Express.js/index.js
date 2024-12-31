const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const PORT = 3000;
/*
//to create a middleware
const sandipmiddleware = (req, res, next) => {
  console.log(res);
  next;
};
app.use(sandipmiddleware);

app.get("/user", (req, res) => {
  res.send("Hello Sandip.");
});
//to access file from folder
app.use(express.static(path.join(__dirname, "Demo")));

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/user/:userName", (req, res) => {
  res.send("Hello" + req.params.userName);
});
*/

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Sandip");
});

app.post("/user", (req, res) => {
  const { Name, gmail, password } = req.body;
  console.log(`${Name}, ${gmail}, ${password}`);
  res.status(200).json({ message: "SuccessFull Login" });
});

app.listen(PORT, () => {
  console.log(`Server is running PORT: ${PORT}`);
});
