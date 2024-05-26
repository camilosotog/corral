const { Corral } = require('../models');

exports.createCorral = async (req, res) => {
  try {
    const corral = await Corral.create(req.body);
    res.status(201).send(corral);
  } catch (error) {
    res.status(400).send(error);
  }
};
