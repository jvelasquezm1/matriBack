const qs = require('qs');
const {
  guestsService,
} = require('../services');

exports.readGuests = async (req, res) => {
  try {
    const guests = await guestsService.readGuests();
    res.json(guests);
  } catch (err) {
    res.json([]);
  }
};

exports.addGuests = async (req, res) => {
  const guest = qs.parse(req.body);
  try {
    const createdGuest = await guestsService.addGuests(guest);
    res.json(createdGuest);
  } catch (err) {
    res.json({
      error: err.message,
    });
  }
};
