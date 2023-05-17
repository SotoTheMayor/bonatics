const { Schema, Types } = require('mongoose');

// sub document, don't need model, Types is a class built into mongoose and auto generates and id

const wishSchema = new Schema({
    plantInterested: {
      type: String,
      required: true,
    },
    wishID: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
  });
  
  module.exports =  wishSchema ;