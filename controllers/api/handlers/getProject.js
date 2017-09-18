const Project = require('../../../models/Project');

// this just sends a message

module.exports = (req, res) => {
  Project.findOne({
    where: { id: req.params.id }
  })
    .then((project) => {
      if (!project) res.send('not found');
      else res.json(project);
    })
    .catch((err) => {
      throw err;
    });
};
