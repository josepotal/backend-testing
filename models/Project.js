// represents data, implements business logic and handles storage
const Sequelize = require('sequelize');
const db = require('../services/db');
const User = require('./User');

// define model (model name, and properties)
const Project = db.define('project', {
  id: { type: Sequelize.INTEGER, primaryKey: true },
  title: { type: Sequelize.STRING, allowNull: false, unique: true },
  description: Sequelize.TEXT,
  deadline: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
  finished: { type: Sequelize.BOOLEAN, defaultValue: false },
  // foreign keys
  user_id: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  }
});

module.exports = Project;
