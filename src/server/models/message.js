'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate(models) {
      this.belongsTo(models.User);
      this.belongsTo(models.Chat);
    }
  }
  Message.init({
    text: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    chatId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};