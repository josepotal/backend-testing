const express = require('express');

const router = express.Router();

// ROUTER-LEVEL middleware. It is specific for this route '/birds'
router.use((req, res, next) => {
  console.log('Birds Time: ', Date.now());
  next();
});

// Sub-stack middleware for '/birds/about'
router.use('/about', (req, res, next) => {
  console.log('Birds About visited!');
  next();
});

// define home page
router.get('/', (req, res) => {
  res.send('Birds home page');
});

// define about route
router.get('/about', (req, res) => {
  res.send('Birds about page');
});

module.exports = router;
