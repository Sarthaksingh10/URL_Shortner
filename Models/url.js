const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema(
  {
    ShortId: {
      type: String,
      required: true,
      unique: true,
    },
    RedirectUrl: {
      type: String,
      required: true,
    },
    VisitedHistory: [
      {
        timestamps: {
          type: Number,
        },
      },
    ],
  },
  { timestamps: true }
);

const URL = mongoose.model("url", UrlSchema);

module.exports = URL;
