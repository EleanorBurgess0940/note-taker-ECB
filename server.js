var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "client/build")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "assets")));
  //
  app.get("*", (req, res) => {
    res.sendfile(path.join((__dirname = "assets/index.html")));
  });
}
//build mode
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "assets/index.html"));
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
