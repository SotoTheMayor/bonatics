const { Schema, model } = require('mongoose');

const bcrypt = require('bcrypt');

const wishSchema = require('./Wish');

const tradeSchema  = require('./Trade');


// const bcrypt = require('bcrypt');

const userSchema = new Schema({
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
        type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
        type: String,
        required: true,
    },
    wish: [wishSchema],
    trade: [tradeSchema]    
    
})
// hash user password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // custom method to compare and validate password for logging in
  userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
  
const User = model('User', userSchema);

module.exports = User;
