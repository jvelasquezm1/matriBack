const { Schema } = require('mongoose');

const guestsSchema = new Schema({
  name: String,
  email: String,
  guests: Number,
  message: String
},
{
  collection: 'GuestsCollection',
  timestamps: { createdAt: true, updatedAt: true },
});

module.exports = guestsSchema;
