const { Schema, model } = require('mongoose');

const tradeSchema = new Schema({
    userID: {
      type: String,
      required: true,
    },
    plantId: {
      type: String,
      required: true,
    },
    plantImage: {
      type: String,
    },
    plantName: {
      type: String,
      required: true,
    },
  });
  
  // const Trade = model('Trade', tradeSchema);
  
  module.exports =  tradeSchema ;