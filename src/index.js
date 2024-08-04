const express = require("express");

const app = express();
const { PORT } = require("./config/serverConfig");

app.get("/", (req, res) => {
  res.send("Hello from TweetSocial");
});

app.listen(PORT, () => {
  console.log(`Server is up and running on PORT: ${PORT}`);
});
