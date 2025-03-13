const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  products: Array,
  total: Number,
  status: { type: String, default: "Pending" },
});

module.exports = mongoose.model("Order", orderSchema);
