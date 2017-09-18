const Project = require('../../../models/Project');

// this just sends a message

module.exports = (req, res) => {
  // const { first_name, second_name } = req.body;

  Project.create(req.body)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((err) => {
      throw err;
    });
};
