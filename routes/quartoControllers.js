const router = require('express').Router();

// routes
router.get('/quarto', getAll);
// router.get('/', getDefault);

function getAll(req, res, next) {
    userService.getAll()
    .then(users => res.json(users))
    .catch(err => next(err));
}

function getDefault(req, res, next) {
    res.send("O acesso a este recurso está aberto!");
}

module.exports = router;