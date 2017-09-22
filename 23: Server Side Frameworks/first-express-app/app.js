var express = require ("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hi there!");
  console.log(req.params);
});

app.get("/bye", function (req, res) {
  res.send("Goodbye!");
});

app.get("/cat", function (req, res) {
  res.send("MEOW!");
});

app.get("/r/:subredditName/", function (req, res) {
  var subreddit = (req.params.subredditName).toUpperCase();
  res.send("Welcome to the " + subreddit + " Subreddit!");
});

app.get("/r/:subredditName/comments/:id/:title", function (req, res) {
  console.log(req.params);
  res.send("Welcome to the comments page!");
});

// * Route Matcher: Acts as catcher
// for undefined routes
app.get("*", function (req, res) {
  res.send("You are a Star!");
});

app.listen(3000, process.env.IP);
