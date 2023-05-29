// icluir as blitiotecas
const express = require('express');
const router = express.Router(); //chamar a função 
const db = require('./../db/models');//icluir o arquivo que tem a conecção com a base de dados 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { eAdmin } = require('./auth');


router.get('/usuario', eAdmin, async  (req, res) =>{
    const usuario = await db.usuario.findAll({
        attributes: ['id', 'name', 'email'],
        order:[["id", "DESC"]]
    });
    if(usuario){
        return res.json({
           usuario,
           id_usuario_logado: req.usuarioId
        });
    } else{
        return res.status(400).json({
            mensagem : " erro: usuario não  encontrado com sucesso",
        });
    }
});




router.post("/usuario", async (req, res) => {
    var dados = req.body;
  
    if (typeof dados.password !== 'string') {
      return res.status(400).json({
        mensagem: "erro: senha inválida",
      });
    }
  
    if (!dados.password) {
      return res.status(400).json({
        mensagem: "erro: senha não fornecida",
      });
    }
  
    try {
      dados.password = await bcrypt.hash(dados.password, 8);
  
      await db.usuario.create(dados).then((dadosUsuario) => {
        return res.json({
          mensagem: "usuario criado com sucesso",
          dadosUsuario,
        });
      }).catch(() => {
        return res.json({
          mensagem: "erro: usuario não criado com sucesso",
        });
      });
    } catch (error) {
      return res.status(500).json({
        mensagem: "erro: falha ao criar o usuário",
        error: error.message,
      });
    }
  });
  
 
router.get("/usuario/:id", eAdmin, async (req, res) => {
    const {id}= req.params;
    console.log(id);
    const usuario = await db.usuario.findOne({
        attributes:['id','name','address', 'email', 'password', 'type_user'],
        where:{id},
    })
    console.log(usuario);
    if (usuario){
        return res.json({
            usuario: usuario.dataValues
        });
    } else{
        return res.status(400).json({
            mensagem:"erro: usuario não encontardo  "
        });
    }
    
});


router.put("/usuario", async (req, res)=> {
    var dados = req.body;
    await db.usuario.update(dados,{where:{id:dados.id}})
    .then(()=>{
        return res.json({
                mensagem:" usuario  editado com sucesso  "
            });
    }).catch(()=>{
        return res.status(400).json({
            mensagem:"erro: usuario não editado com sucesso  "
        });
    });
});

router.delete("/usuario/:id", async (req,res)=>{
    const {id} = req.params;
    await db.usuario.destroy({
        where:{id}
    }).then(()=>{
        return res.json({
            mensagem:"usuario apagado com sucesso"
        });
    }).catch(()=>{
        return res.status(400).json({
            mensagem:"erro: usuario não apagado com sucesso  "
        });
    });
    
});


module.exports = router;// exportar a intrução que esta dentro da constante router