const User = require('../../../models/User');

//this just sends a message
module.exports = (req, res) => {
  User.findAll()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      throw err;
    });
};
