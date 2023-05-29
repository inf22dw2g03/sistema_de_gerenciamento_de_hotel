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
        console.log("token:"+token);
        if(!token){
            return res.status(400).json({
                mensagem:"erro:Necessario realizar o login para acessar a pagina! faltam o token B"
            })
        }
        try{
            const decode = await promisify(jwt.verify)(token,"HsVdhjegytefjhrr4235gdxssjhjfiw8785643527y") //meter token
            req.usarioId = decode.id; 
            return next();
        }catch(err){
            return res.status(400).json({
                mensagem:"erro: Necessario realizar o login para acessar a pagina!  token invalido"
            });
        }
    }
}