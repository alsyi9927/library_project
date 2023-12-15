const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Seat = sequelize.define('Seat', {
    seatNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    remainingTime: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isReserved: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });

  return Seat;
};
