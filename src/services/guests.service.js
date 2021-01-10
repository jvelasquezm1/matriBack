const {
  collectionGuests,
} = require('../models');

exports.readGuests = async () => {
  try {
    const guests = await collectionGuests.find();
    return guests;
  } catch (err) {
    console.log(err);
    throw new Error('Error reading the guests');
  }
};

exports.addGuests = async (guest) => {
  try {
    const guests = await collectionGuests.create(guest);
    return guests;
  } catch (err) {
    console.log(err);
    throw new Error('Error creating the guest');
  }
};
