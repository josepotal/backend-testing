const User = require('../../../models/User');

//this just sends a message

module.exports = (req, res) => {
  console.log(req.body);
  let { first_name, second_name } = req.body;
  console.log(first_name, second_name);

  User.create({
    first_name: first_name,
    second_name: second_name
  })
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      throw err;
    });
};
