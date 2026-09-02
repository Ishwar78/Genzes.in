const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const HeroVideo = require("../module/HeroVideo");
const videoUpload = require("../middleware/videoUploadMiddleware");
const { protectAdmin } = require("../middleware/authMiddleware");

// @route   GET /api/videos/active
// @desc    Get active hero videos (Public for Frontend)
// @access  Public
router.get("/active", async (req, res) => {
  try {
    const activeVideos = await HeroVideo.find({ isActive: true }).sort({
      createdAt: -1,
    });

    if (!activeVideos || activeVideos.length === 0) {
      // Default fallback videos
      return res.json({
        success: true,
        isCustom: false,
        videos: ["/video1.mp4", "/video2.mp4", "/video3.mp4"],
      });
    }

    const videoUrls = activeVideos.map((v) => v.videoUrl);

    res.json({
      success: true,
      isCustom: true,
      videos: videoUrls,
      videoDetails: activeVideos,
    });
  } catch (error) {
    console.error("Fetch active videos error:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching hero videos",
      error: error.message,
    });
  }
});

// @route   GET /api/videos/all
// @desc    Get all hero videos (Admin)
// @access  Private (Admin)
router.get("/all", protectAdmin, async (req, res) => {
  try {
    const videos = await HeroVideo.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: videos.length,
      videos,
    });
  } catch (error) {
    console.error("Fetch all videos error:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching videos",
      error: error.message,
    });
  }
});

// @route   POST /api/videos/upload
// @desc    Upload a new hero section video (Admin)
// @access  Private (Admin)
router.post("/upload", protectAdmin, (req, res) => {
  videoUpload.single("video")(req, res, async (err) => {
    if (err) {
      console.error("Video upload error:", err.message);
      return res.status(400).json({
        success: false,
        message: err.message || "Video upload failed",
      });
    }

    try {
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "Please select a video file to upload",
        });
      }

      const title = req.body.title || req.file.originalname;
      const videoUrl = `/uploads/${req.file.filename}`;

      const newVideo = await HeroVideo.create({
        title,
        videoUrl,
        filename: req.file.filename,
        fileSize: req.file.size,
        isActive: true,
      });

      res.status(201).json({
        success: true,
        message: "Hero video uploaded and activated successfully!",
        video: newVideo,
      });
    } catch (error) {
      console.error("Save video error:", error);
      res.status(500).json({
        success: false,
        message: "Error saving video details",
        error: error.message,
      });
    }
  });
});

// @route   PATCH /api/videos/:id/toggle
// @desc    Toggle active state of a video (Admin)
// @access  Private (Admin)
router.patch("/:id/toggle", protectAdmin, async (req, res) => {
  try {
    const video = await HeroVideo.findById(req.params.id);
    if (!video) {
      return res.status(404).json({
        success: false,
        message: "Video not found",
      });
    }

    video.isActive = !video.isActive;
    await video.save();

    res.json({
      success: true,
      message: `Video ${video.isActive ? "activated" : "deactivated"} successfully`,
      video,
    });
  } catch (error) {
    console.error("Toggle video error:", error);
    res.status(500).json({
      success: false,
      message: "Error toggling video status",
      error: error.message,
    });
  }
});

// @route   DELETE /api/videos/:id
// @desc    Delete a hero video (Admin)
// @access  Private (Admin)
router.delete("/:id", protectAdmin, async (req, res) => {
  try {
    const video = await HeroVideo.findById(req.params.id);
    if (!video) {
      return res.status(404).json({
        success: false,
        message: "Video not found",
      });
    }

    // Delete physical file if exists
    if (video.filename) {
      const filePath = path.join(__dirname, "../uploads", video.filename);
      if (fs.existsSync(filePath)) {
        try {
          fs.unlinkSync(filePath);
        } catch (e) {
          console.error("Error deleting physical video file:", e);
        }
      }
    }

    await HeroVideo.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Hero video deleted successfully",
    });
  } catch (error) {
    console.error("Delete video error:", error);
    res.status(500).json({
      success: false,
      message: "Error deleting video",
      error: error.message,
    });
  }
});

module.exports = router;
