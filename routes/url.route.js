const express = require("express");
const {
  generateShortUrl,
  getShortUrl,
} = require("../controllers/url.controller");
const router = express.Router();

router.post("/", generateShortUrl);

router.get("/short-url", getShortUrl);

module.exports = router;
