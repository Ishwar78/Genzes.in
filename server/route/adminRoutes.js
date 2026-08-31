const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const path = require("path");
const fs = require("fs");
const Admin = require("../module/Admin");
const Support = require("../module/Support");
const { protectAdmin } = require("../middleware/authMiddleware");

// Generate JWT Helper
const generateToken = (id) => {
  return jwt.sign(
    { id },
    process.env.JWT_SECRET || "genzes_super_secure_jwt_secret_key_2026_@#",
    { expiresIn: "7d" }
  );
};

// @route   POST /api/admin/login
// @desc    Admin login & get token
// @access  Public
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide email and password",
      });
    }

    const admin = await Admin.findOne({ email: email.toLowerCase().trim() });

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isMatch = await admin.matchPassword(password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = generateToken(admin._id);

    res.json({
      success: true,
      message: "Login successful",
      token,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Server error during login",
      error: error.message,
    });
  }
});

// @route   GET /api/admin/me
// @desc    Get current admin profile
// @access  Private (Admin)
router.get("/me", protectAdmin, async (req, res) => {
  res.json({
    success: true,
    admin: req.admin,
  });
});

// @route   GET /api/admin/stats
// @desc    Get dashboard statistics
// @access  Private (Admin)
router.get("/stats", protectAdmin, async (req, res) => {
  try {
    const total = await Support.countDocuments();
    const newTickets = await Support.countDocuments({ status: "new" });
    const inProgress = await Support.countDocuments({ status: "in_progress" });
    const resolved = await Support.countDocuments({ status: "resolved" });

    res.json({
      success: true,
      stats: {
        total,
        newTickets,
        inProgress,
        resolved,
      },
    });
  } catch (error) {
    console.error("Stats error:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching stats",
      error: error.message,
    });
  }
});

// @route   GET /api/admin/supports
// @desc    Get all support messages
// @access  Private (Admin)
router.get("/supports", protectAdmin, async (req, res) => {
  try {
    const { status, search } = req.query;
    let query = {};

    if (status && status !== "all") {
      query.status = status;
    }

    if (search) {
      const searchRegex = new RegExp(search, "i");
      query.$or = [
        { name: searchRegex },
        { email: searchRegex },
        { username: searchRegex },
        { mobile: searchRegex },
        { message: searchRegex },
      ];
    }

    const supports = await Support.find(query).sort({ createdAt: -1 });

    res.json({
      success: true,
      count: supports.length,
      supports,
    });
  } catch (error) {
    console.error("Fetch supports error:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching support messages",
      error: error.message,
    });
  }
});

// @route   PATCH /api/admin/supports/:id/status
// @desc    Update support message status
// @access  Private (Admin)
router.patch("/supports/:id/status", protectAdmin, async (req, res) => {
  try {
    const { status } = req.body;

    if (!["new", "in_progress", "resolved"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status value",
      });
    }

    const support = await Support.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!support) {
      return res.status(404).json({
        success: false,
        message: "Support ticket not found",
      });
    }

    res.json({
      success: true,
      message: "Status updated successfully",
      support,
    });
  } catch (error) {
    console.error("Update status error:", error);
    res.status(500).json({
      success: false,
      message: "Error updating status",
      error: error.message,
    });
  }
});

// @route   DELETE /api/admin/supports/:id
// @desc    Delete a support message
// @access  Private (Admin)
router.delete("/supports/:id", protectAdmin, async (req, res) => {
  try {
    const support = await Support.findById(req.params.id);

    if (!support) {
      return res.status(404).json({
        success: false,
        message: "Support ticket not found",
      });
    }

    // If there is an uploaded image, delete it from disk
    if (support.image) {
      const fileName = path.basename(support.image);
      const filePath = path.join(__dirname, "../uploads", fileName);
      if (fs.existsSync(filePath)) {
        try {
          fs.unlinkSync(filePath);
        } catch (e) {
          console.warn("Could not delete image file:", e.message);
        }
      }
    }

    await Support.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Support ticket deleted successfully",
    });
  } catch (error) {
    console.error("Delete support error:", error);
    res.status(500).json({
      success: false,
      message: "Error deleting ticket",
      error: error.message,
    });
  }
});

module.exports = router;
