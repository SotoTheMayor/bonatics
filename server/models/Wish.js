const { Schema, model } = require('mongoose');

const wishSchema = new Schema({
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
  
  // const Wish = model('Wish', wishSchema);
  
  module.exports =  wishSchema ;