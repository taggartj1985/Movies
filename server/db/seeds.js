use movies_hub;
db.dropDatabase();

db.movies.insertMany([

  {title: "test1",
  genre: "test1",
  rating: 15},

  {title: "test2",
  genre: "test2",
  rating: 15}

])
