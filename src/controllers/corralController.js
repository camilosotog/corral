const { Corral, Animal } = require('../models');

exports.createCorral = async (req, res) => {
  try {
    const corral = await Corral.create(req.body);
    res.status(201).send(corral);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.reasignCorral = async () => {
  try {
    const corrals = await Corral.findAll();
    const animals = await Animal.findAll();

    if (!corrals.length || !animals.length) {
      return 'No hay corrales o animales disponibles para reorganizar';
    }

    const emptyCorrals = corrals.filter(corral => {
      const animalsInCorral = animals.filter(animal => animal.CorralId === corral.id);
      return animalsInCorral.length === 0;
    });

    const noDangerousAnimals = animals.filter(animal => !animal.dangerous);

    if (emptyCorrals.length === 0 || noDangerousAnimals.length === 0) {
      return 'No hay corrales vacíos o animales no peligrosos disponibles';
    }

    for (const animal of noDangerousAnimals) {
      const emptyCorral = emptyCorrals.pop();
      if (emptyCorral && animal) {
        if (typeof animal.update === 'function') {
          await animal.update({ CorralId: emptyCorral.id });
        }
      }
    }
    return 'Reorganización de animales completada';
  } catch (error) {
    return 'Error interno del servidor';
  }
};
