const { Schema, Types } = require('mongoose');

const tradeSchema = new Schema({
    plantId: {
      type: Number,
      required: true,
    },
    plantImage: {
      type: String,
      required: false,
    },
    plantName: {
      type: String,
      required: true,
    },
  //   tradeID: {
  //     type: Schema.Types.ObjectId,
  //     default: () => new Types.ObjectId(),
  // },
  });

  module.exports =  tradeSchema ;