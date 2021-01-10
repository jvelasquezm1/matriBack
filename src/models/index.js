const mongoose = require('mongoose');

const guestsSchema = require('./guests.model');

const collectionGuests = mongoose.model('GuestsCollection', guestsSchema);

module.exports = {
  collectionGuests,
};
