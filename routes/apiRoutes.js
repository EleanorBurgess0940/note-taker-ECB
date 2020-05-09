var fs = require("fs");

const notesInfo = JSON.parse(fs.readFileSync("db.json"));

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    return res.json(notesInfo);
  });
  app.post("/api/notes");

  app.delete("/api/notes/:id");
};
