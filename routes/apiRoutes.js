var fs = require("fs");

const notesInfo = JSON.parse(fs.readFileSync("db.json"));

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    return res.json(notesInfo);
  });

  app.post("/api/notes", function (req, res) {
    const newNote = req.body;
    notesInfo.push(newNote);
    addID();
    fs.writeFile("db.json", JSON.stringify(notesInfo), function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Successfully wrote note  to database.");
      }
    });
    res.json(notesInfo);
  });

  function addID() {
    notesInfo.forEach((element, i) => {
      element.id = i + 1;
    });
  }
  // still working on making this work
  app.delete("/api/notes/:id", function (req, res) {
    const deleted = notesInfo.findIndex((i) => i.id == req.params.id);
    notesInfo.splice(deleted, 1);
    reWrite();
    res.json(notesInfo);
  });
  let reWrite = () => {
    let newNoteInfo = JSON.stringify(notesInfo);
    fs.writeFile("db.json", newNoteInfo, (err) => {
      if (err) throw err;
    });
  };
};
