// icluir as blitiotecas
const express = require('express');
const router = express.Router(); //chamar a função 
const db = require('./../db/models');//icluir o arquivo que tem a conecção com a base de dados 

router.get("/quartos",async  (req, res) =>{
    const quarto = await db.quarto.findAll({
        attribute:["numero_quarto","tipo_quart","numero_cama","preco_noite", "disponibilidade"], //indicar as colunas 
        order:[['id']]
    })
    if (quarto){
        return res.json({
            quarto: quarto
        });
    }else{
        return res.status(400).json({
            mensagem : " erro: quarto não  encontrado ",
           
        });
    }
});

router.get("/quartos/:id",async (req, res) =>{ 
    const {id} = req.params; //receber o parametro enviado na url
    const quarto = await db.quarto.findOne({
        attribute:["numero_quarto","tipo_quart","numero_cama","preco_noite", "disponibilidade"], //indicar as colunas 
        where:{id},  //condição qual quel registo deve ser retornado 
    });

 
    if (quarto){
        return res.json({quarto:quarto.dataValues}); 
    }else{
        return res.status(400).json({
            mensagem : " erro: quarto não  encontrado",
           
        });
    }
});


router.post("/quartos", async (req, res) => {  
    var dados = req.body;
    console.log(dados); 
  

    await db.quarto.create(dados).then((dadosQuarto) => {   // para salvar na base de dados
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


router.put("/quartos", async(req, res) => {
    var dados = req.body;
    await db.quarto.update(dados,{where: {id: dados.id}}).then(()=>{
       return res.json({
        mensagem : "Quarto editado com sucesso"
       });
    }).catch(() => {
        return res.status(400).json({
            mensagem : " erro: quarto não  editado com sucesso ",
           
        });
    });
   
});




router.delete("/quartos/:id", async(req, res) => {
    const {id} = req.params;
     await db.quarto.destroy({
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