const db = require("../db/models");
const jwt = require('jsonwebtoken');
const {promisify}= require('util');


module.exports = {
    eAdmin: async function (req, res, next) {
        const authHeader = req.headers.authorization;
        //console.log(authHeader);
        if(!authHeader) {
            return res.status(400).json({
                mensagem:"Erro: Necessario realizar o login para acessar a pagina!Token errado! "
            });
        }

        const [, token] = authHeader.split(' ');
        console.log("Token:" + token);

        if(!token){
            return res.status(400).json({
                mensagem:"Erro: Necessário realizar o login para acessar a pagina! Falta o token!"
            });
        }
        try{
            const decode = await promisify(jwt.verify)(token,"ANbr0ZeNunC1oDiNg"); //meter token
            req.usarioId = decode.id;

            //verificar se o usuario tem previlegios de administrador
            const usuario = await db.usuario.findOne({
                where: {
                    id: decode.id,
                    type_user: 'admin',
                },
            });
            if (!usuario) {
                return res.status(403).json({
                    mensagem: "Erro: Acesso negado. Você não possui privilégios de administrador!",
                });
            }
            return next();
        }catch(err){
            return res.status(400).json({
                mensagem:"Erro: Necessario realizar o login para acessar a pagina! Token inválido.",
            });
        }
    },
};