const Sequelize = require('sequelize');
const sequelize = require('../../config/db');

const Animal = require('./animal')(sequelize, Sequelize);
const Corral = require('./corral')(sequelize, Sequelize);
const Animalrestriction = require('./animalrestriction')(sequelize, Sequelize);

const db = {
  sequelize,
  Sequelize,
  Animal,
  Corral,
  Animalrestriction
};

module.exports = db;
