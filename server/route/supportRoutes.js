const express = require("express");
const router = express.Router();
const Support = require("../module/Support");
const upload = require("../middleware/uploadMiddleware");

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

      if (!message || !message.trim()) {
        return res.status(400).json({
          success: false,
          message: "Please write your message / description",
        });
      }

      let imagePath = null;
      if (req.file) {
        imagePath = `/uploads/${req.file.filename}`;
      }

      const support = await Support.create({
        name: name.trim(),
        email: email.toLowerCase().trim(),
        username: (username || "").trim(),
        mobile: (mobile || "").trim(),
        message: message.trim(),
        image: imagePath,
        status: "new",
      });

      res.status(201).json({
        success: true,
        message:
          "Your support request has been submitted successfully. Our team will review it soon!",
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
