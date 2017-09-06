const Sequelize = require('sequelize');

//need to install mysql2 package
const connection = new Sequelize('demo_schema', 'root', 'root', {
  dialect: 'mysql'
});

module.exports = connection;
