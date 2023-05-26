// icluir as blitiotecas
const express = require('express');
const router = express.Router(); //chamar a função 
const db = require('./../db/models');//icluir o arquivo que tem a conecção com a base de dados 

router.get('/usuarios',async  (req, res) =>{
    const usuario = await db.usuario.findAll({
        order:[["id", "DESC"]]
    });
    if(usuario){
        return res.json({
           usuario
        });
    } else{
        return res.json({
            mensagem : " erro: usuario não  encontrado com sucesso",
        });
    }
});




router.post("/usuarios", async (req, res) => {
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
});

router.get("/usuarios/:id", async (req, res) => {
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


router.put("/usuarios", async (req, res)=> {
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

router.delete("/usuarios/:id", async (req,res)=>{
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