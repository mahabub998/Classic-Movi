import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function Movie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  
  return (
   <section>
  <div className="justify-content-between ms-5">
  <div className="row mt-5">
  {movies.map((movie) => (
    <MovieCard movie={movie}></MovieCard>
  ))}
</div> 
</div>
   </section>
  );
}

export default Movie;
