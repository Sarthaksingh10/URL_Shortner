const express = require("express");
const { handleGenereateShortUrl } = require("../Controllers/url");
const router = express.Router();

router.post("/", handleGenereateShortUrl);

module.exports = router;
