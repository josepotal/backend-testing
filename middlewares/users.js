// Express middlewares which process the incoming requests before handling them down to the routes
// own middleware
// const myLogger = function (req, res, next) {
//   console.log('LOGGED');
//   next();
// };

// // configurable middleware
// module.exports = function(options) {
//   return function(req, res, next) {
//     /// middleware implementation
//     next();
//   };
// };
//
// const mw = require(./my-middleware.js);
// app.use(mw({option1: '1', option2: '2'}))
