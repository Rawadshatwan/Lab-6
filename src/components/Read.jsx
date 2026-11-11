//Read.js

// this imports info from the Movies.jsx file
import Movies from "./Movies";
import { useEffect, useState } from "react";
import axios from "axios";
const Read = () => {
  const [myMovies, setMovies] = useState([])

// Fecthes data after the components number
  useEffect(() => {
    //do some http client work such as fecting the movie data from an API
    axios.get('http://localhost:4000/api/movies')
      .then((response) => {
        console.log(response.data)
        setMovies(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  return (
    <div>
      <h2>This is my Read Component.</h2>
      <Movies movies={myMovies} />
    </div>
  );
}

export default Read;