module.exports = (sequelize, DataTypes) => {
    const Animal = sequelize.define('Animal', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      dangerous: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      CorralId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
  
    return Animal;
  };