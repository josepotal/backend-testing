const express = require('express');
const router = express.Router();

// middleware that is specific for this route
router.use(function timeLog(req, res, next) {
  console.log('Birds Time: ', Date.now());
  next();
});

//define home page
router.get('/', (req, res) => {
  res.send('Birds home page');
});

//define about route
router.get('/about', (req, res) => {
  res.send('Birds about page');
});

module.exports = router;
