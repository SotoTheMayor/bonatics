const { Schema, model } = require('mongoose');

const wishSchema = new Schema({
    userID: {
      type: String,
      required: true,
    },
    wishName: {
      type: String,
      required: true,
    },
  });
  
  const Wish = model('Wish', wsihSchema);
  
  module.exports = Wish;