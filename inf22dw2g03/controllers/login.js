const express = require('express');
const router = express.Router(); //chamar a função 
const db = require('../db/models');//icluir o arquivo que tem a conecção com a base de dados 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
    const usuario = await db.usuario.findOne({
        attributes: ['id', 'name', 'email', 'password'],
        where: {
            email: req.body.email,
        },
    });
    if (usuario === null){
        return res.status(400).json({
            mensagem:"Erro: Usuario ou password incorreta! Usuario!"
        });
    }
    if (!(await bcrypt.compare(req.body.password, usuario.password)))
    {
        return res.status(400).json({
            mensagem:"Erro: Usuario ou password incorreta! Password!"
        });
    }
    var token = jwt.sign({id: usuario.id},"ANbr0ZeNunC1oDiNg", {
        expiresIn: 3600000 // tempo login
    });
    return res.json({
        mensagem:"Login realizado com sucesso !",
        token
    });
    
  });

module.exports = router;// exportar a intrução que esta dentro da constante router