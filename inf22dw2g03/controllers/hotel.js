const express = require('express');
const { eAdmin } = require('./auth');
const router = express.Router();
const db = require('../db/models');

router.get('/hotel', async (req, res) => {
  try {
    const hotels = await db.hotel.findAll({
      order: [['id', 'DESC']],
    });
    return res.json({ hotels });
  } catch (error) {
    return res.status(400).json({
      mensagem: 'Erro ao buscar hotéis.',
      error: error.message,
    });
  }
});


router.get('/hotel/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const hotel = await db.hotel.findOne({
      attributes: ['id', 'nome', 'numero_quartos', 'classification', 'preco_noite', 'disponibilidade'],
      where: { id },
    });

    if (hotel) {
      return res.json({ hotel });
    } else {
      return res.status(400).json({
        mensagem: 'Hotel não encontrado.',
      });
    }
  } catch (error) {
    return res.status(400).json({
      mensagem: 'Erro ao buscar hotel.',
      error: error.message,
    });
  }
});

router.post('/hotel',eAdmin, async (req, res) => {
  try {
    const dados = req.body;
    const novoHotel = await db.hotel.create(dados);
    return res.json({
      mensagem: 'Hotel criado com sucesso.',
      hotel: novoHotel,
    });
  } catch (error) {
    return res.status(400).json({
      mensagem: 'Erro ao criar hotel.',
      error: error.message,
    });
  }
});

router.put('/hotel/:id',eAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const dados = req.body;
    await db.hotel.update(dados, { where: { id } });
    return res.json({
      mensagem: 'Hotel editado com sucesso.',
    });
  } catch (error) {
    return res.status(400).json({
      mensagem: 'Erro ao editar hotel.',
      error: error.message,
    });
  }
});

router.delete('/hotel/:id',eAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    await db.hotel.destroy({
      where: { id },
    });
    return res.json({
      mensagem: 'Hotel apagado com sucesso.',
    });
  } catch (error) {
    return res.status(400).json({
      mensagem: 'Erro ao apagar hotel.',
      error: error.message,
    });
  }
});

module.exports = router;
