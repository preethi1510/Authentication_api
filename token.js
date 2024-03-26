const jwt = require("jsonwebtoken");
require("dotenv").config();

function createToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "24h" });
}

function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = { createToken, verifyToken };