const express = require('express');
const { Animal } = require('../models');
const router = express.Router();

// Crear un nuevo animal
router.post('/', async (req, res) => {
  try {
    const animal = await Animal.create(req.body);
    res.status(201).json(animal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos los animales
router.get('/', async (req, res) => {
  try {
    const animals = await Animal.findAll();
    res.status(200).json(animals);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener un animal por ID
router.get('/:id', async (req, res) => {
  try {
    const animal = await Animal.findByPk(req.params.id);
    if (animal) {
      res.status(200).json(animal);
    } else {
      res.status(404).json({ error: 'Animal not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Actualizar un animal
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Animal.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedAnimal = await Animal.findByPk(req.params.id);
      res.status(200).json(updatedAnimal);
    } else {
      res.status(404).json({ error: 'Animal not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar un animal
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Animal.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Animal not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener animales por corral
router.get('/animal/:corralId', async (req, res) => {
  try {
    const { corralId } = req.params;
    const animals = await Animal.findAll({ where: { corralId } });
    res.status(200).json(animals);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
