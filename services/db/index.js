const Sequelize = require('sequelize');

// need to install mysql2 package
const db = new Sequelize('demo_schema', 'root', 'root', {
  dialect: 'mysql'
});

module.exports = db;
