//required npm
var fs = require("fs");

//adds the database to this file
const notesInfo = JSON.parse(fs.readFileSync("db.json"));

module.exports = function (app) {
  //reads the database information and displays
  app.get("/api/notes", function (req, res) {
    return res.json(notesInfo);
  });

  //saves the new note from the users input into the databas
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

  //adds an individual new id for each note
  function addID() {
    notesInfo.forEach((element, i) => {
      element.id = i + 1;
    });
  }

  //searches the db for the id of the correct note
  app.delete("/api/notes/:id", function (req, res) {
    const deleted = notesInfo.findIndex((i) => i.id == req.params.id);
    notesInfo.splice(deleted, 1);
    reWrite();
    res.json(notesInfo);
  });

  // rewrites the db without the deleted note
  let reWrite = () => {
    let newNoteInfo = JSON.stringify(notesInfo);
    fs.writeFile("db.json", newNoteInfo, (err) => {
      if (err) throw err;
    });
  };
};
