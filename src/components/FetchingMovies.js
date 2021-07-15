import axios from 'axios';
import React, { useEffect, useState } from 'react';

const FetchingMovies = () => {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.tvmaze.com/search/shows?q=avengers')
      .then(res => {
        console.log(res);
        setmovies(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <h2>Fetching Movies</h2>
      <ul>
        {movies.map(movie => (
          <p key={movie.show.id}>
            <h5>Movie Name: {movie.show.name}</h5>
            <h5>Rating : {movie.show.rating.average}</h5>
            <p>
              Genres :{' '}
              <li style={{ listStyle: 'none' }}>{movie.show.genres}</li>
            </p>
          </p>
        ))}
      </ul>
    </div>
  );
};
export default FetchingMovies;
