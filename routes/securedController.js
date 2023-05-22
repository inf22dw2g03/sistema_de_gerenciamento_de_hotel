const express = require("express");
const router = express.Router();

// routes
router.get("/", getDefault);
module.exports = router;

function getDefault(req, res, next) {
  res.send("Este acesso ao recurso é autenticado!");
}
