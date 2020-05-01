use movies_hub;
db.dropDatabase();

db.movies.insertMany([

  {title: "Raiders Of THe Lost Ark",
  genre: "Action",
  rating: "A",
  release_date: "30th July 1981",
  runtime: 115,
  crew: [{director:"Steven Spielberg", writer:"George Lucas"}]},

  {title: "The Man From Earth",
  genre: "Drama",
  rating: "pg",
  release_date: "10th June 2007",
  runtime: 87,
  crew: [{director:"Richard Schenkman", writer:"Jerome Bixby"}]},

  {title: "A Tale Of Two Sisters",
  genre: "Horror",
  rating: "15",
  release_date: "13th August 2004",
  runtime: 114,
  crew: [{director:"Jee-woon Kim", writer:"Jee-woon Kim"}]},

])


//
// Movies will be stored with the following data:
//
// Title
// Genre
// Rating (PG, 12A, 15, 18, etc)
// Release Date (Stored as a string for now)
// Runtime
// Crew (An object storing director and producer details)
