// create.js

import { useState } from "react";
// this imports the axios library that will be used to make HTTP requests
import axios from "axios";

// these are the variables if the value or onchange are the same it will input in all slots
function Create() {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [poster, setPoster] = useState('');
// this is the function that will handle the submit of the form
const handleSubmit = (e) => {
  e.preventDefault();
  
  console.log(`Title: ${title}, Year: ${year}, Poster: ${poster}`);
  // this is the movie object that will be sent to the server
  const movie = {
    title: title,
    year: year,
    poster: poster
  };
  
  axios.post('http://localhost:4000/api/movies', movie)
    .then((res) => {console.log(res.data)})
    .catch((error) => {console.log(error)});
};

  //the code below allows for the create component to add movies title, year, posters,
  return (
    <div>
      <h2>This is my Create Component.</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input type="text"
            className="form-control"
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}
          />
        </div>
        <div className="form-group">
          <label>Add Movie Year: </label>
          <input type="text"
            className="form-control"
            value={year}
            onChange={(e) => { setYear(e.target.value) }} 
          />
        </div>
        <div className="form-group">
          <label>Add Movie Poster: </label>
          <input type="text"
             className="form-control"
             value={poster}
             onChange={(e) => { setPoster(e.target.value) }} 
          />
        </div>
        <input type="submit" value="Add Movie" />
      </form>
    </div>
    
  );
  
}

export default Create;