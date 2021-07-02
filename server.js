const express = require("express");
const path = require("path");
const app = express();

//Serve Static files
app.use(express.static(__dirname + "/dist/news-web"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/news-web/index.html"));
});

//default heroku port

app.listen(process.env.PORT || 3000);
