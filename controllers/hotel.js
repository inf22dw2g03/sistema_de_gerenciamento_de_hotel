// icluir as blitiotecas
const express = require('express');
const router = express.Router(); //chamar a função 
const db = require('./../db/models');//icluir o arquivo que tem a conecção com a base de dados 

router.get("/hotel",async  (req, res) =>{
    const hotel = await db.hotel.findAll({
        attribute:["nome","address","numero_quartos","classifacation","preco_noite", "desponibilidade"], //indicar as colunas 
        order:[['id']]
    })
    if (hotel){
        return res.json({
            hotel: hotel
        });
    }else{
        return res.status(400).json({
            mensagem : " erro: hotel não  encontrado ",
           
        });
    }
});

router.get("/hotel/:id",async (req, res) =>{ 
    const {id} = req.params; //receber o parametro enviado na url
    const hotel = await db.hotel.findOne({
        attribute:["nome","address","numero_quartos","classifacation","preco_noite", "desponibilidade"], //indicar as colunas 
        where:{id},  //condição qual quel registo deve ser retornado 
    });

 
    if (hotel){
        return res.json({hotel:hotel.dataValues}); 
    }else{
        return res.status(400).json({
            mensagem : " erro: hotel não  encontrado",
           
        });
    }
});


router.post("/hotel", async (req, res) => {  
    var dados = req.body;
    console.log(dados); 
  

    await db.hotel.create(dados).then((dadosHotel) => {   // para salvar na base de dados
        return res.json({
            mensagem : "Hotel criado com sucesso",
            dadosHotel
        });
    }).catch(() => {
        return res.json({
            mensagem : " erro: Hotel não  criado com sucesso",
           
        });
     }); 
})


router.put("/hotel", async(req, res) => {
    var dados = req.body;
    await db.hotel.update(dados,{where: {id: dados.id}}).then(()=>{
       return res.json({
        mensagem : "Hotel editado com sucesso"
       });
    }).catch(() => {
        return res.status(400).json({
            mensagem : " erro: Hotel não  editado com sucesso ",
           
        });
    });
   
});




router.delete("/hotel/:id", async(req, res) => {
    const {id} = req.params;
     await db.hotel.destroy({
        where: {id:id},
     }).then(()=>{
        return res.json({
            mensagem : "hotel apagado com sucesso"
        });
     }).catch(()=>{
        return res.status(400).json({
            mensagem : " erro: hotel não  apagado com sucesso ",
           
        });
     });
   
});




module.exports = router;// exportar a intrução que esta dentro da constante router