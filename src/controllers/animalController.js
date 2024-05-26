const { Animal } = require('../models');

exports.createAnimal = async (req, res) => {
  try {
    const animal = await Animal.create(req.body);
    res.status(201).send(animal);
  } catch (error) {
    res.status(400).send(error);
  }
};
