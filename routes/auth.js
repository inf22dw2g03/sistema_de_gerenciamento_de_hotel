const express = require('express');
const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const {usuario} = require('../db/models');
const { where } = require('sequelize');
const usuario = require('../db/models/usuario');

passport.use(new BasicStrategy(async (email, password, done) => {
    try {
        const usuario = await usuario.findOne({ where: {email} });
        if (!usuario) {
            return done(null, false, { message: 'Usuario nao encontrado'});
        }
        const isValidPassword = await usuario.isValidPassword(password);
        if (!isValidPassword) {
            return done(null, false, { message: 'Senha incoreta' });
        }
        return done(null, usuario);
    } catch (error) {
        return done(error);
    }
}));

const router = express.Router();

router.post('/login', passport.authenticate('basic', { session: false}), (req, res) => {
    // autenticação bem sucedida, gerar e retornar token JWT
    const token = jwt.sign({ id: usuario.id }, 'secret_token', {expiresIn: 'id'});
    return res.json({auth: true, token});
});

module.exports = router;