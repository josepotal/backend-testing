const express = require('express');

const router = express.Router();

// ROUTER-LEVEL middleware. It is specific for this '/api' route
router.use((req, res, next) => {
  console.log('Api Time: ', Date.now());
  next();
});

// this route comes from handler getUsers --> modularize
const getAllUsers = require('./handlers/getAllUsers');
const getUser = require('./handlers/getUser');
const createUser = require('./handlers/createUser');
const getAllProjects = require('./handlers/getAllProjects');
const getProject = require('./handlers/getProject');
const createProject = require('./handlers/createProject');

// define about route to get one user
router.get('/users', getAllUsers);
router.get('/users/:id', getUser);
router.post('/createUser', createUser);
router.get('/projects', getAllProjects);
router.get('/projects/:id', getProject);
router.post('/createProject', createProject);

module.exports = router;
