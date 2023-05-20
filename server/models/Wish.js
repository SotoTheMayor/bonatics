const { Schema, Types } = require('mongoose');

// sub document, don't need model, Types is a class built into mongoose and auto generates and id

const wishSchema = new Schema({
    plantName: {
      type: String,
      required: true,
    },
    plantId: {
      type: String,
      required: true,
    },
    plantImage: {
      type: String,
      required: false,
    },
    // wishID: {
    //     type: Schema.Types.ObjectId,
    //     default: () => new Types.ObjectId(),
    // },
  });
  
  module.exports =  wishSchema ;