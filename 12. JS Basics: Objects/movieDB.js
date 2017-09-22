var movies = [
  {
    title: "Star Wars: The Prequels",
    rating: 4,
    hasWatchhed: true
  },
  {
    title: "Despicable me",
    rating: 3.5,
    hasWatchhed: true
  },
  {
    title: "Star Wars: The Force Awakens",
    rating: 3.8,
    hasWatchhed: false
  },
  {
    title: "Lego Batman Movie",
    rating: 4,
    hasWatchhed: true
  },
]

movies.forEach (function (movie) {
  console.log(buildMovieSummary (movie));
})

function buildMovieSummary (movie) {
  var toPrint = (movie.hasWatchhed) ?
    "You have watched " : "You have not seen ";
  toPrint += "\"" + movie.title + "\" - " + movie.rating;
  return toPrint;
}
