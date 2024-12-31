const express = require("express");
const cors = require("cors");
const app = express();
const Port = 3000;

app.use(cors());
app.use(express.json());

app.get("/user", (req, res) => {
  res.send("User Interface.");
});

app.post("/user", (req, res) => {
  const { name, gmail, password } = req.body;
  console.log(name, gmail, password);

  res.status(200).json({ message: " SuffessFully Login" });
});

app.listen(Port, () => {
  console.log("Server is running the port.");
});
