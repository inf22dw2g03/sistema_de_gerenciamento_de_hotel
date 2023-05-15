// icluir as blitiotecas
const express = require('express');
const router = express.Router(); //chamar a função 
const db = require('./../db/models');//icluir o arquivo que tem a conecção com a base de dados 

router.get("/usuario",async  (req, res) =>{
    const usuario = await db.usuario.findAll({
        attribute:["id","name","address","email","password","type_user"],
        order:[['id']]
    })
    if (usuario){
        return res.json({
            usuario: usuario
        });
    }else{
        return res.status(400).json({
            mensagem : " erro: usuario não  encontrado ",
           
        });
    }
});


router.post("/usuario", async (req, res) => {  
    var dados = req.body;
    console.log(dados); 
  

    await db.usuario.create(dados).then((dadosUsuario) => {   // para salvar na base de dados
        return res.json({
            mensagem : "usuario criando com sucesso",
            dadosUsuario
        });
    }).catch(() => {
        return res.json({
            mensagem : " erro: usuario não  criando com sucesso",
           
        });
     }); 
})


module.exports = router;// exportar a intrução que esta dentro da constante router