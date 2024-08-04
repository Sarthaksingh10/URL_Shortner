/* const { nanoid } = require("nanoid"); */
const shortid = require("shortid");
const URL = require("../Models/url");

const handleGenereateShortUrl = async (req, res) => {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "No url inserted " });
  const ShortId = shortid();

  await URL.create({
    ShortId: ShortId,
    RedirectUrl: body.url,
    VisitedHistory: [],
  });
  return res.json({ id: ShortId });
};

const handleGetURL = async (req, res) => {
  const shortId = req.params.shortID;
  console.log("hello1", shortId);
  console.log("hello2", req);
  console.log("hello4", URL.findOneAndUpdate);
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  console.log(shortId);
  console.log("hello3", entry);
  res.redirect(entry.RedirectUrl);
};

const handleShowAllUrl = async (req, res) => {
  const allUrl = await URL.find({});
  return res.json(allUrl);
};
const handleDeleteUrl = async (req, res) => {
  const shortID = req.params.ShortId;
  await URL.findOneAndDelete(shortID);
  res.json({ status: "Deleted" });
};
module.exports = {
  handleGenereateShortUrl,
  handleDeleteUrl,
  handleGetURL,
  handleShowAllUrl,
};
