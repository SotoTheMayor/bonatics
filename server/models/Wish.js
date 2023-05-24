const { Schema } = require('mongoose');

// connected to the User, this wish list is populated from the Perunal API
const wishSchema = new Schema({
    plantName: {
      type: String,
      required: true,
    },
    plantId: {
      type: Number,
      required: true,
    },
    plantImage: {
      type: String,
      required: false,
    },
  });
  
  module.exports =  wishSchema ;