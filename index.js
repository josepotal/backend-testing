const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const connection = require('./services/db');

// load router module in app
const birds = require('./controllers/birds');
const api = require('./controllers/api');

const app = express();

// morgan middleware
app.use(morgan('dev'));

// express.Router is like a 'mini-app'
app.use('/birds', birds);
app.use('/api', api);

connection.sync().then(() => {
  app.listen(3000, () => console.log('example app listening at port 3000...'));
});
