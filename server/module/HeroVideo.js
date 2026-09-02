const mongoose = require("mongoose");

const heroVideoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: "Hero Section Video",
      trim: true,
    },
    videoUrl: {
      type: String,
      required: [true, "Video URL is required"],
    },
    filename: {
      type: String,
      default: "",
    },
    fileSize: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("HeroVideo", heroVideoSchema);
