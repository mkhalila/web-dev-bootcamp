var express = require ("express");
var app = express();
var bodyParser = require ("body-parser");

app.use (bodyParser.urlencoded ({extended: true}));

app.set ("view engine", "ejs");

var friends = ["Khalil", "Yanko", "Mohammad"];

app.get ("/", function (req, res) {
  res.render ("home");
});

app.get ("/friends", function (req, res) {
  res.render ("friends", {friends: friends});
});

app.post ("/friends/add", function (req, res) {
  var newFriend = req.body.friendName;
  friends.push (newFriend);
  res.redirect ("/friends")
});

app.listen (3000, process.env.IP);
