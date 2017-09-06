// represents data, implements business logic and handles storage
const Sequelize = require('sequelize');
const connection = require('../services/db');

//define model (model name, and properties)
const User = connection.define('user', {
  first_name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  second_name: {
    type: Sequelize.STRING
  }
});

module.exports = User;
