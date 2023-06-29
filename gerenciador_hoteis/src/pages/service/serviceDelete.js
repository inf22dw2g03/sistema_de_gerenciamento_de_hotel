import axios from "axios";


export const serviceDelete = async (url) => {
    var mensagem;

    await axios.delete(url)
    .then((response) => {
        mensagem = response.data.mensagem;
    }).catch((err) => {
        if (err.response){
            mensagem = err.response.data.mensagem;
        }else{
            mensagem = "Erro: Tente novamente mais tarde ou entre em contacto com ...!";
        }
    })

    return mensagem;
}