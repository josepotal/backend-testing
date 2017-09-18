const User = require('../../../models/User');

// this just sends a message

module.exports = (req, res) => {
  User.findOne({
    where: { id: req.params.id }
  })
    .then((user) => {
      // console.log(user.count;
      res.json(user);
    })
    .catch((err) => {
      throw err;
    });
};
