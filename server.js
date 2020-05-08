var express = require("express");
var path = require("path");
var app = express();

var PORT = 3000;

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "assets/index.html"));
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
