const User = require('../../../models/User');

// this just sends a message

module.exports = (req, res) => {
  console.log(req.body);
  // if we want to be specific in the inputs, destructure it from req.body
  const { first_name, second_name } = req.body;
  // User.create({ first_name, second_name })

  User.create(req.body)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      throw err;
    });
};
