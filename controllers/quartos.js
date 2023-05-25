// icluir as blitiotecas
const express = require('express');
const router = express.Router(); //chamar a função 
const db = require('../db/models');//icluir o arquivo que tem a conecção com a base de dados 

router.get("/quarto",async  (req, res) =>{
    const quartos = await db.quartos.findAll({
        attribute:["numero_quarto","tipo_quart","numero_cama","preco_noite", "disponibilidade"], //indicar as colunas 
        order:[['id']]
    })
    if (quartos){
        return res.json({
            quarto: quartos
        });
    }else{
        return res.status(400).json({
            mensagem : " erro: quarto não  encontrado ",
           
        });
    }
});

router.get("/quarto/:id",async (req, res) =>{ 
    const {id} = req.params; //receber o parametro enviado na url
    const quartos = await db.quartos.findOne({
        attribute:["numero_quarto","tipo_quart","numero_cama","preco_noite", "disponibilidade"], //indicar as colunas 
        where:{id},  //condição qual quel registo deve ser retornado 
    });

 
    if (quartos){
        return res.json({quartos:quartos.dataValues}); 
    }else{
        return res.status(400).json({
            mensagem : " erro: quarto não  encontrado",
           
        });
    }
});


router.post("/quarto", async (req, res) => {  
    var dados = req.body;
    console.log(dados); 
  

    await db.quartos.create(dados).then((dadosQuarto) => {   // para salvar na base de dados
        return res.json({
            mensagem : "Quarto criado com sucesso",
            dadosQuarto
        });
    }).catch(() => {
        return res.json({
            mensagem : " erro: Quarto não  criado com sucesso",
           
        });
     }); 
})


router.put("/quarto", async(req, res) => {
    var dados = req.body;
    await db.quartos.update(dados,{where: {id: dados.id}}).then(()=>{
       return res.json({
        mensagem : "Quarto editado com sucesso"
       });
    }).catch(() => {
        return res.status(400).json({
            mensagem : " erro: quarto não  editado com sucesso ",
           
        });
    });
   
});




router.delete("/quarto/:id", async(req, res) => {
    const {id} = req.params;
     await db.quartos.destroy({
        where: {id:id},
     }).then(()=>{
        return res.json({
            mensagem : "quarto apagado com sucesso"
        });
     }).catch(()=>{
        return res.status(400).json({
            mensagem : " erro: quarto não  apagado com sucesso ",
           
        });
     });
   
});




module.exports = router;// exportar a intrução que esta dentro da constante router