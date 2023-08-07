import MoviesList from 'components/moviesList/MoviesList';
import { useEffect, useState } from 'react';
// import { getTrendingMovies } from 'services/TmdbAPI';

import axios from "axios";

const Home = () => { 
  const [moviesTrending, setMoviesTrending] = useState([]);
  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/trending/movie/day?api_key=1bb674914a73bcdd70cc8fd8d868be33'
        );

        setMoviesTrending(response.data.results)
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    getTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {<MoviesList movies={moviesTrending} />}
    </div>
  );
};

export default Home;
