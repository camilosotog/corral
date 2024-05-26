module.exports = (sequelize, DataTypes) => {
    const Corral = sequelize.define('Corral', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
  
    return Corral;
  };
  