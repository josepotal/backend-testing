// represents data, implements business logic and handles storage
const Sequelize = require('sequelize');
const db = require('../services/db');

// define model (model name, and properties)
const User = db.define('user', {
  first_name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  second_name: {
    type: Sequelize.STRING
  }
}, {
  getterMethods: {
    fullName() {
      return `${this.first_name} ${this.second_name}`;
    }
  }
});

// Class Method

// Instance Method
// User.prototype.greet = () => `HELOOOO my name is ${User.first_name}`;

module.exports = User;
