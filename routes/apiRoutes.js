const db = JSON.parse(fs.readFileSync("db/db.json"));

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json(db);
  });

  app.post("/api/notes", function (req, res) {
    db.push(req.body);
    res.json(true);
  });

  app.delete("/api/notes/:id");
};
