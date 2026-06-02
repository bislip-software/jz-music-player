const express = require("express");
const connectDB = require("./config/db");
const cors = require('cors');
const path = require("path");
const responseTime = require("response-time");

const app = express();

//Connect DB
connectDB();

app.use(cors()); // Enable CORS for all routes

//Init Middlewares
app.use(responseTime());
app.use(express.json({ extended: false }));

//Define Routes
app.use("/api", require("./routes/index"));

// Set static folder
app.use(express.static("client/build"));
// Always renders index.html
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});


if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5001;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;