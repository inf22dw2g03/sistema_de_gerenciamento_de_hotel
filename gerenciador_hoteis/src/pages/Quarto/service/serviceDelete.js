// pages/Hotel/service/serviceDelete.js

import axios from 'axios';
import React from 'react';

const ServiceDelete = async (url) => {
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

export default ServiceDelete;
