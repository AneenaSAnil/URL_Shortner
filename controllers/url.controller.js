const validateUrl = require("../utils/validate");
const URL = require("../models/url.model");

function uniqueId() {
  const uniqueId = Math.floor(Math.random() * Date.now());
  return uniqueId;
}

async function generateShortUrl(req, res) {
  try {
    const originalUrl = req.body.url;
    if (!originalUrl) {
      return res.status(400).json({ error: "URL is required" });
    }
    const isValudUrl = validateUrl();
    if (!isValudUrl) {
      return res.status(400).json({ error: "URL is invalid" });
    }
    const shortID = uniqueId();

    await URL.create({
      shortUrl: shortID,
      redirectUrl: originalUrl,
    });

    return res.status(200).json({ id: shortID });
  } catch (err) {
    console.log(err);
    res.status(500).json("Server Error");
  }
}
async function getShortUrl(req, res) {
  try {
    const shortUrl = req.body.url;
    if (!shortUrl) {
      return res.status(400).json({ error: "URL is required" });
    }

    const url = await URL.findOne({ shortUrl: shortUrl });
    if (url) {
      return res.redirect(url.redirectUrl);
    } else res.status(404).json("URL not found");
  } catch (err) {
    console.log(err);
    res.status(500).json("Server Error");
  }
}
module.exports = {
  generateShortUrl,
  getShortUrl,
};
