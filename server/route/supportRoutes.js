const express = require("express");
const router = express.Router();
const Support = require("../module/Support");
const upload = require("../middleware/uploadMiddleware");

// Helper to generate unique GZ-XXXXXX ticket ID
const generateUniqueTicketId = async () => {
  let isUnique = false;
  let ticketId = "";

  while (!isUnique) {
    // 6 digit random number prefixed by GZ-
    const randomDigits = Math.floor(100000 + Math.random() * 900000);
    ticketId = `GZ-${randomDigits}`;

    const existing = await Support.findOne({ ticketId });
    if (!existing) {
      isUnique = true;
    }
  }

  return ticketId;
};

// @route   POST /api/support
// @desc    Submit a new support ticket/message
// @access  Public
router.post("/", (req, res) => {
  upload.single("image")(req, res, async (err) => {
    if (err) {
      console.error("Multer upload error:", err.message);
      return res.status(400).json({
        success: false,
        message: err.message || "Image upload failed",
      });
    }

    try {
      const { name, email, username, mobile, message } = req.body;

      if (!name || !name.trim()) {
        return res.status(400).json({
          success: false,
          message: "Please enter your name",
        });
      }

      if (!email || !email.trim()) {
        return res.status(400).json({
          success: false,
          message: "Please enter your email address",
        });
      }

      if (!username || !username.trim()) {
        return res.status(400).json({
          success: false,
          message: "Please enter your GenZes username",
        });
      }

      if (!message || !message.trim()) {
        return res.status(400).json({
          success: false,
          message: "Please write your message / description",
        });
      }

      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "Please attach a screenshot or image (Mandatory)",
        });
      }

      const imagePath = `/uploads/${req.file.filename}`;

      const ticketId = await generateUniqueTicketId();

      const support = await Support.create({
        ticketId,
        name: name.trim(),
        email: email.toLowerCase().trim(),
        username: username.trim(),
        mobile: (mobile || "").trim(),
        message: message.trim(),
        image: imagePath,
        status: "new",
      });

      res.status(201).json({
        success: true,
        message:
          "Your support request has been submitted successfully. Our team will review it soon!",
        ticketId: support.ticketId,
        support,
      });
    } catch (error) {
      console.error("Support submission error:", error);
      res.status(500).json({
        success: false,
        message: "Error submitting support request. Please try again.",
        error: error.message,
      });
    }
  });
});

module.exports = router;
