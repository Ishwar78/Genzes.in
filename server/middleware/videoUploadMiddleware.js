const multer = require("multer");
const path = require("path");
const fs = require("fs");

const uploadDir = path.join(__dirname, "../uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const sanitizedOriginal = file.originalname
      .replace(/[^a-zA-Z0-9.]/g, "_")
      .toLowerCase();
    cb(null, `hero_video_${uniqueSuffix}${path.extname(sanitizedOriginal)}`);
  },
});

// File type filter (Video formats)
const fileFilter = (req, file, cb) => {
  const allowedExtensions = /\.(mp4|webm|mov|mkv|avi|m4v)$/i;
  const isMimeVideo = file.mimetype.startsWith("video/");

  if (isMimeVideo || allowedExtensions.test(path.extname(file.originalname))) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Invalid video file. Please upload an MP4, WebM, MOV, or MKV video."
      ),
      false
    );
  }
};

// 100MB limit for hero videos
const videoUpload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 100 * 1024 * 1024, // 100 MB
  },
});

module.exports = videoUpload;
