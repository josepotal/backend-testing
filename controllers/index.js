// here we define our routes and logic

//=======TESTINGGG!!!

// routes
app.get('/', (req, res) => {
  res.send('Hello world!!');
});

app.post('/', (req, res) => {
  res.send('Post request to home page!');
});

app.get('/about.all', (req, res) => {
  res.send('Hello about!!');
});

app.all('/secret', (req, res, next) => {
  console.log('accessing the secret section ...');
  next(); // pass control to next handler
});

// route handlers, allow multiple callback functions
app.get(
  '/users/:userId',
  (req, res, next) => {
    console.log(req.params);
    next();
  },
  (req, res) => {
    res.send('hello there');
  }
);

// array of callback functions
var cb0 = function(req, res, next) {
  console.log('CB0');
  next();
};

var cb1 = function(req, res, next) {
  console.log('CB1');
  next();
};

var cb2 = function(req, res) {
  res.sendStatus(403);
};

app.get('/example/c', [cb0, cb1, cb2]);

// app.route()

app
  .route('/book')
  .get((req, res) => {
    res.send('Get a book');
  })
  .post((req, res) => {
    res.send('Add a book');
  })
  .put((req, res) => {
    res.send('Update a book');
  });
