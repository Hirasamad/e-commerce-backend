require("dotenv").config();
const connectDB = require("./config/db"); // ✅ Correct Path
const express = require("express");
const cors = require("cors");

// ✅ Only one declaration of connectDB
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/products", require("./routes/productRoutes")); // ✅ Correct Path

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
