const { Schema, Types } = require('mongoose');

const tradeSchema = new Schema({
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
    tradeID: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
  },
  });

  module.exports =  tradeSchema ;