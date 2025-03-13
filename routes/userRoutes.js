// const express = require("express");
// const router = express.Router();
// const User = require("../models/User");

// // Create User (Signup)
// router.post("/signup", async (req, res) => {
//   const user = new User(req.body);
//   await user.save();
//   res.send(user);
// });

// // Read Users
// router.get("/", async (req, res) => {
//   const users = await User.find();
//   res.send(users);
// });

// // Update User
// router.put("/:id", async (req, res) => {
//   const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   res.send(user);
// });

// // Delete User
// router.delete("/:id", async (req, res) => {
//   await User.findByIdAndDelete(req.params.id);
//   res.send({ message: "User Deleted" });
// });

// module.exports = router;

const express = require("express");
const router = express.Router();

// Dummy User Data
const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Doe", email: "jane@example.com" },
];

// @route   GET /api/users
router.get("/", (req, res) => {
  res.json(users);
});

module.exports = router;

