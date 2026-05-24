const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("TrendCart Server Running Successfully");
});

// Port
const PORT = 5000;

// Server Start
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});