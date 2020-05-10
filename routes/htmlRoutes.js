//required npm
var path = require("path");

module.exports = function (app) {
  //sends the user to index.html from notes.html
  app.get("/", function (req, res) {
    res.sendFile(path.join(_dirname, "../public/index.html"));
  });

  //sends the user to notes.html to index.html
  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
};
