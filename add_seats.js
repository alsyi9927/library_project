const { Sequelize, DataTypes } = require('sequelize');
const config = require('./config/config.json');

const sequelize = new Sequelize(config.development);

const Seat = require('./models/seat')(sequelize);

const addSeats = async () => {
  try {
    await sequelize.sync();

    for (let i = 1; i <= 10; i++) {
      await Seat.create({
        seatNumber: i,
        remainingTime: 60, 
        isReserved: false,
      });
    }

    console.log('성공적으로 추가 완료');
  } catch (error) {
    console.error('에러 발생:', error);
  } finally {
    await sequelize.close();
  }
};

addSeats();
