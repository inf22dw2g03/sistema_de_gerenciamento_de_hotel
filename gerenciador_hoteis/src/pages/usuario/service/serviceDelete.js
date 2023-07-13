// ../usuario/service/serviceDelete.js

import axios from 'axios';

export const serviceDelete = async (url) => {
  let mensagem;

  await axios
    .delete(url)
    .then((response) => {
      mensagem = response.data.mensagem;
    })
    .catch((err) => {
      if (err.response) {
        mensagem = err.response.data.mensagem;
      } else {
        mensagem = 'Erro: Tente novamente mais tarde ou entre em contato com ...!';
      }
    });

  return mensagem;
};

