const { Schema } = require("mongoose");

// connected to the user, the trade is populated from the Perunal API oject info
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
});

module.exports = tradeSchema;
