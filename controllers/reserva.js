// icluir as blitiotecas
const express = require('express');
const router = express.Router(); //chamar a função 
const db = require('./../db/models');//icluir o arquivo que tem a conecção com a base de dados 

router.get("/reserva",  async (req, res) =>{
    const reserva = await db.reserva.findAll({
        attribute:["data_check_in","data_check_out","numero_pessoas","numero_quarto","preco", "status_reserva"], //indicar as colunas 
        order:[['id']]
    })
    if (reserva){
        return res.json({
            reserva: reserva
        });
    }else{
        return res.status(400).json({
            mensagem : " erro: reserva não  encontrado ",
           
        });
    }
});

router.get("/reserva/:id",async (req, res) =>{ 
    const {id} = req.params; //receber o parametro enviado na url
    const reserva = await db.reserva.findOne({
        attribute:["data_check_in","data_check_out","numero_pessoas","numero_quarto","preco", "status_reserva"], //indicar as colunas 
        where:{id},  //condição qual quel registo deve ser retornado 
    });

 
    if (reserva){
        return res.json({reserva:reserva.dataValues}); 
    }else{
        return res.status(400).json({
            mensagem : " erro: reserva não  encontrado",
           
        });
    }
});


router.post("/reserva", async (req, res) => {  
    var dados = req.body;
    console.log(dados); 
  

    await db.reserva.create(dados).then((dadosreserva) => {   // para salvar na base de dados
        return res.json({
            mensagem : "reserva criado com sucesso",
            dadosreserva
        });
    }).catch(() => {
        return res.json({
            mensagem : " erro: reserva não  criado com sucesso",
           
        });
     }); 
})


router.put("/reserva", async(req, res) => {
    var dados = req.body;
    await db.reserva.update(dados,{where: {id: dados.id}}).then(()=>{
       return res.json({
        mensagem : "reserva editado com sucesso"
       });
    }).catch(() => {
        return res.status(400).json({
            mensagem : " erro: reserva não  editado com sucesso ",
           
        });
    });
   
});




router.delete("/reserva/:id", async(req, res) => {
    const {id} = req.params;
     await db.reserva.destroy({
        where: {id:id},
     }).then(()=>{
        return res.json({
            mensagem : "reserva apagado com sucesso"
        });
     }).catch(()=>{
        return res.status(400).json({
            mensagem : " erro: reserva não  apagado com sucesso ",
           
        });
     });
   
});




module.exports = router;// exportar a intrução que esta dentro da constante router