var express = require ("express");
var app = express();

app.use (express.static ("public"));
app.set ("view engine", "ejs");

app.get("/", function (req, res) {
  res.render ("home")
  //res.send("<h1>Welcome to the home page!</h1><h2>Blah</h2>");
});

app.get("/fallinlovewith/:language", function (req, res) {
  var language = req.params.language;
  res.render ("love", {language: language});
  // res.send("You fell in love with " + language);
});

app.get("/posts", function (req, res) {
  var posts = [
    {title: "Post 1", author: "BananaMan"},
    {title: "My adorable pet bunny", author: "Chocolate"},
    {title: "Node is awesome", author: "Tesco"}
  ];
  res.render ("posts", {posts: posts});
});

app.listen(3000, process.env.IP);
