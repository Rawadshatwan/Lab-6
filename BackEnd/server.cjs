// This is a simple Express server that will serve the movie data to the client
const express = require('express');
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require('body-parser');
// This is the connection to the MongoDB database
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@phantor.c4auufx.mongodb.net/MoviesDB');

// This will allow the server to accept requests from any origin
app.use(cors());

// This will allow the server to accept requests from any origin
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// This will allow the server to parse the body of the request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// This is the schema for the movie data that will be stored in the MongoDB database
  const movieSchema = new mongoose.Schema({
    title: String,
    year: String,
    poster: String
  });
 
  const MovieModel = mongoose.model('MyMovie2', movieSchema);

  // This is the endpoint that will be used to create a new movie in the database
 app.post('/api/movies', async (req, res)=>{

 const { title, year, poster } = req.body;

 const newMovie = new MovieModel({ title, year, poster });
 await newMovie.save();

 res.status(201).json({ message: 'Movie created successfully', movie: newMovie });
 })

// This is the endpoint that will be used to fetch the movie data from the server
app.get('/api/movie/:id', async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.send(movie);
});

// This is the endpoint that will be used to fetch the movie data from the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})