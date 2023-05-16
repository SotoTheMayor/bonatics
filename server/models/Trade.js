const { Schema, model } = require('mongoose');

const tradeSchema = new Schema({
    userID: {
      type: String,
      required: true,
    },
    plantName: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      default: 0,
    },
    traderID: {
      type: String,
      required: true,
    },
  });
  
  const Trade = model('Trade', tradeSchema);
  
  module.exports = { Trade, tradeSchema };