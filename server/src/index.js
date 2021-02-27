const express = require("express");
const app = express();

const PORT = process.env.PORT | 5000;

app.get("/", (req, res) => {
  const obj = { hi: "there" };
  res.send(obj);
});

app.listen(PORT, (req, res) => {
  console.log(`Server up and running on port ${PORT}`);
});
