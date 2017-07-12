const express = require("express");
const app = express();
const port = process.env.port || 3000;
const path = require("path");
const bodyParser = require("body-parser");

const authRoutes = require(path.join(__dirname, "/routes/authRoutes"));
const deckRoutes = require(path.join(__dirname, "/routes/deckRoutes"));
const quizRoutes = require(path.join(__dirname, "/routes/quizRoutes"));

// MIDDLEWARE
app.use(bodyParser.json());

// ROUTES
app.use("/decks", deckRoutes);
app.use("/quiz", quizRoutes);
app.use("/", authRoutes);

if (require.main === "module") {
  app.listen(port, () => {
    console.log(`Spinning with express: Port ${port}`);
  });
}

module.exports = app;
