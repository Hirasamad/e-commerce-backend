// const express = require("express");
// const router = express.Router();
// const Order = require("../models/Order");

// // Create Order
// router.post("/", async (req, res) => {
//   const order = new Order(req.body);
//   await order.save();
//   res.send(order);
// });

// // Read Orders
// router.get("/", async (req, res) => {
//   const orders = await Order.find();
//   res.send(orders);
// });

// // Update Order
// router.put("/:id", async (req, res) => {
//   const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   res.send(order);
// });

// // Delete Order
// router.delete("/:id", async (req, res) => {
//   await Order.findByIdAndDelete(req.params.id);
//   res.send({ message: "Order Deleted" });
// });

// module.exports = router;

const express = require("express");
const router = express.Router();

// Dummy Orders Data
const orders = [
  { id: 1, user: "John Doe", product: "Laptop", quantity: 1 },
  { id: 2, user: "Jane Doe", product: "Phone", quantity: 2 },
];

// @route   GET /api/orders
router.get("/", (req, res) => {
  res.json(orders);
});

module.exports = router;
