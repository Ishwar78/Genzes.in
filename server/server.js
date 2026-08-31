const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const connectDB = require("./config/db");

// Initialize express app
const app = express();

// Connect to Database
connectDB();

// Middlewares
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded files statically
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// API Routes
app.use("/api/admin", require("./route/adminRoutes"));
app.use("/api/support", require("./route/supportRoutes"));

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    service: "GenZes Backend Server",
  });
});

// Root route
app.get("/", (req, res) => {
  res.send("🚀 GenZes API Server is running smoothly.");
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.originalUrl}`,
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Unhandled Error:", err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
  console.log(`🚀 GenZes Backend Server running on port ${PORT}`);
  console.log(`📡 URL: http://localhost:${PORT}`);
});
