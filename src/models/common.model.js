const { INTEGER } = require('sequelize');
const commonModel = {
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
};

const commonOptions = {
  createdAt: false,
  updatedAt: false
};

module.exports = { commonModel, commonOptions };