const { Schema, model } = require('mongoose');

const wishSchema = new Schema({
    userID: {
      type: String,
      required: true,
    },
    plantInterested: {
      type: String,
      required: true,
    },
  });
  
  const Wish = model('Wish', wishSchema);
  
  module.exports = Wish;