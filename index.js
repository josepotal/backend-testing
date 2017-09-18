const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const db = require('./services/db');

// load router module in app
const birds = require('./controllers/birds');
const api = require('./controllers/api');

const app = express();

// THIRD PARTY body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ERROR-HANDLING middlware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
  next();
});

// BUILT-IN middleware --> serve static files '/public/index.js'
app.use('/public', express.static(`${__dirname}/public`));

// THIRD-PARTY morgan middleware --> is an application.level middleware, as it has no mount path
app.use(morgan('dev'));

// Set view engine of templates
app.set('view engine', 'pug');

app.get('/pug', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there' });
});

// express.Router is like a 'mini-app'
app.use('/birds', birds);
app.use('/api', api);

db.sync().then(() => {
  app.listen(5000, () => console.log('example app listening at port 5000...'));
});
