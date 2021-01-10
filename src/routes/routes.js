const { guestsController } = require('../controllers');

module.exports = function (app) {
  app.get('/readGuests', guestsController.readGuests);
  app.post('/addGuests', guestsController.addGuests);
};
