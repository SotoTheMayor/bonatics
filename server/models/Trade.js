const { Schema, Types } = require('mongoose');

const tradeSchema = new Schema({
    plantName: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      default: 0,
    },
    tradeID: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
  },
  });

  module.exports =  tradeSchema ;