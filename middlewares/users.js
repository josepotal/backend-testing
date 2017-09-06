// Express middlewares which process the incoming requests before handling them down to the routes
// own middleware
var myLogger = function(req, res, next) {
  console.log('LOGGED');
  next();
};
