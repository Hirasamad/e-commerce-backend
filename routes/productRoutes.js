// const express = require("express");
// const router = express.Router();
// const Product = require("../models/Product");

// // Create Product
// router.post("/", async (req, res) => {
//   const product = new Product(req.body);
//   await product.save();
//   res.send(product);
// });

// // Read Products
// router.get("/", async (req, res) => {
//   const products = await Product.find();
//   res.send(products);
// });

// // Update Product
// router.put("/:id", async (req, res) => {
//   const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   res.send(product);
// });

// // Delete Product
// router.delete("/:id", async (req, res) => {
//   await Product.findByIdAndDelete(req.params.id);
//   res.send({ message: "Product Deleted" });
// });

// module.exports = router;
const express = require("express");
const router = express.Router();

// Dummy Product Data
const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
];

// @route   GET /api/products
router.get("/", (req, res) => {
  res.json(products);
});

module.exports = router;

