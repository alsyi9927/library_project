const express = require('express');
const router = express.Router();
const { Seat } = require('../models');

router.get('/', async (req, res) => {
  const seats = await Seat.findAll({raw: true});
  console.log(seats);
  res.render('reservationStatus', { seats });
});

router.get('/seat/:seatNumber', async (req, res) => {
  const seatNumber = req.params.seatNumber;
  const seat = await Seat.findOne({ where: { seatNumber } });
  res.render('reservationDetail', { seat });
});

router.post('/reserve/:seatNumber', async (req, res) => {
  const seatNumber = req.params.seatNumber;

  try {
    const updatedSeat = await Seat.update(
      { isReserved: true, remainingTime: 60 }, 
      { where: { seatNumber } }
    );

    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

router.post('/cancel/:seatNumber', async (req, res) => {
  const seatNumber = req.params.seatNumber;

  try {
    const [updatedRowCount] = await Seat.update(
      { isReserved: false, remainingTime: 60 }, 
      { where: { seatNumber } }
    );
    res.sendStatus(200);
    
  } catch (error) {
    res.status(500).send('내부 서버 에러');
  }
});


module.exports = router;




