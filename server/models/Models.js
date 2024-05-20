const mongoose = require("mongoose");

const PizzaNameSchema = new mongoose.Schema({
  Method: {
    type: String,
    enum: ['carryOut', 'favorite']
  },
  Size: {
    type: String,
    enum: ['large', 'medium', 'small']
  },
  Crust: {
    type: String,
    enum: ['crust', 'thick']
  },
  Qty: {
    type: String,
    enum: ['1', '2', '3', '4']
  },
  Toppings: {
    type: String,
    enum: ['Pepperoni', 'Neptune', 'Cheesesticks', 'Hawaiian'],
  },
}, { timestamps: true });

module.exports = mongoose.model('Pizza', PizzaNameSchema);
