require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes"); // ✅ Import auth routes

// ✅ Connect to Database
connectDB();

// ✅ Initialize Express App
const app = express();
app.use(express.json());
app.use(cors());

// ✅ Define Routes AFTER initializing app
app.use("/api/auth", authRoutes); // ✅ Authentication Routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

