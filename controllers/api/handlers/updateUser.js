const User = require('../../../models/User');

//this just sends a message

module.exports = (req, res) => {
  User.update(
    {
      first_name: 'Josep',
      updatedAt: Date.now()
    },
    {
      where: { id: 1 }
    }
  )
    .then(user => {
      res.redirect('/users');
    })
    .catch(err => {
      throw err;
    });
};
