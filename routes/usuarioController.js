const router = require('express').Router();
const userService = require('../service/usuarioService');

// routes
router.get('/', getAll);
// router.get('/', getDefault);
module.exports = router;

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getDefault(req, res, next) {
    res.send("O acesso a este recurso está aberto!");
}