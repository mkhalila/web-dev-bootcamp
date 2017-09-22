var express = require ("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/cat", function (req, res) {
  res.send("The cat says 'Meow'");
});

app.get("/speak/:animal", function (req, res) {
  var animal = req.params.animal.toLowerCase();
  var sounds = {
    cow: "Moo",
    cat: "Meow",
    dog: "Woof"
  };
  res.send("The " + animal + " says '" + sounds[animal] + "'");
});

app.get("/repeat/:toRepeat/:frequency", function (req, res) {
  var toRepeat = req.params.toRepeat;
  var frequency = Number (req.params.frequency);
  res.send(repeatString (toRepeat, frequency));
});

function repeatString (str, freq) {
  var repeatedStr = "";
  for (var i = 0; i < freq; i++)
    repeatedStr += " " + str;
  return repeatedStr;
}

app.get("*", function (req, res) {
  res.send("Sorry, page not found.");
});


app.listen(3000, process.env.IP);
