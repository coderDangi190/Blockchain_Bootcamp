const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
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
// app.use(express.static(path.join(__dirname, "Demo")));

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/user/:userName", (req, res) => {
  res.send("Hello" + req.params.userName);
});

app.listen(PORT, () => {
  console.log(`Server is running PORT: ${PORT}`);
});
