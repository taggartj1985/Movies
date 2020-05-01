use movies_hub;
db.dropDatabase();

db.movies.insertMany([

  {title: "Raiders Of THe Lost Ark",
  genre: "Action",
  rating: "A",
  release_date: "30th July 1981",
  runtime: 115,
  crew: {director:"Steven Spielberg", writer:"George Lucas"},
  plot: "American beats up nazis"},

  {title: "The Man From Earth",
  genre: "Drama",
  rating: "pg",
  release_date: "10th June 2007",
  runtime: 87,
  crew: {director:"Richard Schenkman", writer:"Jerome Bixby"},
  plot: "drinking with jesus"},

  {title: "A Tale Of Two Sisters",
  genre: "Horror",
  rating: "15",
  release_date: "13th August 2004",
  runtime: 114,
  crew: {director:"Jee-woon Kim", writer:"Jee-woon Kim"},
  plot: "two mental sisters getting haunted"},

])
