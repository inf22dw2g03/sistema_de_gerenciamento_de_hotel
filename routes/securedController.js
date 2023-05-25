const express = require("express");
const router = express.Router();

// routes
router.get("/secured", getDefault);

function getDefault(req, res, next) {
  res.send("Este acesso ao recurso é autenticado!");
}

module.exports = router;