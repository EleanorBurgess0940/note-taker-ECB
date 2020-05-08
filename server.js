var express = require("express");
var fs = require("fs");

var app = express;

app.get("/");

app.get("/notes");

app.get("/api/notes");

app.post("/api/notes");

app.delete("/api/notes/:id");
