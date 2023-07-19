// create a web server and listen to port 3000
// to run: node comments.js
// to test: curl -X POST -H "Content-Type: application/json" -d '{"body": "I like this product!"}' http://localhost:3000/comments

var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());

var comments = [];

app.post("/comments", function(req, res) {
  var newComment = req.body;
  newComment.id = comments.length + 1;
  comments.push(newComment);
  res.json(newComment);
});

app.listen(3000, function() {
  console.log("Listening on port 3000...");
});