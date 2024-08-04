const express = require("express");
const app = express();
const UrlRoute = require("./Routes/url");
const Port = 8001;
const { connectMongoDb } = require("./Connection");

const {
  handleDeleteUrl,
  handleGetURL,
  handleShowAllUrl,
} = require("./Controllers/url");

connectMongoDb("mongodb://localhost:27017/ShortUrl").then(() =>
  console.log("Mongoose connected")
);
app.use(express.json());
app.use("/url", UrlRoute);
app.get("/:shortID", handleGetURL);
app.get("/url/AllUrl", handleShowAllUrl);
app.use("/url/:shortID", handleDeleteUrl);
app.listen(Port, () => console.log(`Server running at port : ${Port}`));
