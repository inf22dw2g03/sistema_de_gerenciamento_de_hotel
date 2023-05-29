const jwt = require('jsonwebtoken');
const {promisify}= require('util');


module.exports = {
    eAdmin: async function (req, res, next) {
        const authHeader = req.headers.authorization;
        // console.log(authHeader);
        if(!authHeader) {
            return res.status(400).json({
                mensagem:"erro: Necessario realizar o login para acessar a pagina! faltam o token A"
            });
        }

        const [, token] = authHeader.split(' ');

        if(!token){
            return res.status(400).json({
                mensagem:"erro:Necessario realizar o login para acessar a pagina! faltam o token B"
            });
        }
        try{
            const decode = await promisify(jwt.verify)(token,"HsVdhjegytefjhrr4235gdxssjhjfiw8785643527y") //meter token
            req.usarioId = decode.id;

            //verificar se o usuario tem previlegios de administrador
            const usuario = await db.usuario.findOne({
                where: {
                    id: decode.id,
                    type_user: 'Admin',
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
                mensagem:"Erro: Necessario realizar o login para acessar a pagina!  token invalido.",
            });
        }
    },
};