const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Ashutosh', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
