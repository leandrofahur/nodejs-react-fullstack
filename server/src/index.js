const express = require("express");
const authRoutes = require("../routes/authRoutes");
require("../services/passport");

const app = express();
require("../routes/authRoutes")(app);

const PORT = process.env.PORT | 5000;
app.listen(PORT, (req, res) => {
  console.log(`Server up and running on port ${PORT}`);
});
