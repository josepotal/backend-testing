const Project = require('../../../models/Project');

// this just sends a message
module.exports = (req, res) => {
  Project.findAll()
    .then((projects) => {
      res.json(projects);
    })
    .catch((err) => {
      throw err;
    });
};
