//required npm
var express = require("express");
var app = express();

//required port
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

//Routes from the two folders
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Make sure that the port is working
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
