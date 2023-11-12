const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome To The Server.",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
