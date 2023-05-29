const express = require('express');
const router = express.Router(); //chamar a função 
const db = require('../db/models');//icluir o arquivo que tem a conecção com a base de dados 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
    const usuario = await db.usuario.findOne({
        atributes: ['id', 'name', 'email', 'password'],
        where: {
            email: req.body.email,
        },
    });
    if (usuario === null){
        return res.status(400).json({
            mensagem:"erro: usuario ou password incorreta!"
        });
    }
    if (!(await bcrypt.compare(req.body.password, usuario.password)))//senha meter despos
    {
        return res.status(400).json({
            mensagem:"erro: usuario ou password incorreta "
        });
    }
    var token = jwt.sign({id: usuario.id},"HsVdhjegytefjhrr4235gdxssjhjfiw8785643527y", {
        expiresIn: 300 // 5 mint
    });
    return res.json({
        mensagem:"login realizado com sucesso !",
        token,
    });
  });

module.exports = router;// exportar a intrução que esta dentro da constante router