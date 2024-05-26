module.exports = (sequelize, DataTypes) => {
    const Animalrestriction = sequelize.define('Animalrestriction', {
      animalId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      restrictionId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
  
    return Animalrestriction;
  };
  