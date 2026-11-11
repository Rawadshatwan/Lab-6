import MovieItem from "./MovieItem";
export default function Movies(props){
    {/* props are a way for the parent component to a pass data to the child component*/}
 return props.movies.map(
 (movie)=>{
     {/*They Key give it a unique ID*/}
    return <MovieItem mymovie={movie} key={movie.imdbID}></MovieItem>
 }
 );
}