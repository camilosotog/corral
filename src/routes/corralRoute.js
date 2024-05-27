const express = require('express');
const { Corral } = require('../models');
const router = express.Router();
const { reasignCorral } = require('../controllers/corralController');

// Crear un nuevo corral
router.post('/', async (req, res) => {
  try {
    const corral = await Corral.create(req.body);
    res.status(201).json(corral);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos los corrales
router.get('/', async (req, res) => {
  try {
    const corrals = await Corral.findAll();
    res.status(200).json(corrals);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener un corral por ID
router.get('/:id', async (req, res) => {
  try {
    const corral = await Corral.findByPk(req.params.id);
    if (corral) {
      res.status(200).json(corral);
    } else {
      res.status(404).json({ error: 'Corral not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Actualizar un corral
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Corral.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedCorral = await Corral.findByPk(req.params.id);
      res.status(200).json(updatedCorral);
    } else {
      res.status(404).json({ error: 'Corral not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar un corral
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Corral.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Corral not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/corral/reasign', async (req, res) => {
  try {
    await reasignCorral();
    res.status(200).json({ message: 'Reorganización de animales completada' });
  } catch (error) {
    console.error('Error al reorganizar animales:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;
