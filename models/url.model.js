const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    urlId: {
      type: String,
      required: true,
    },
    redirectUrl: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const URL = mongoose.model("url", urlSchema);

module.exports = URL;
