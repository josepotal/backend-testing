const express = require('express');
const router = express.Router();

// middleware that is specific for this '/api' route
router.use(function timeLog(req, res, next) {
  console.log('Api Time: ', Date.now());
  next();
});

// this route comes from handler getUsers --> modularize
const getAllUsers = require('./handlers/getAllUsers');
const getUser = require('./handlers/getUser');
const updateUser = require('./handlers/updateUser');

//define about route to get one user
router.get('/users', getAllUsers);
router.get('/users/:id', getUser);
router.put('/updateUser', updateUser);

module.exports = router;
