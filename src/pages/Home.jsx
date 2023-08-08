import MoviesList from 'components/moviesList/MoviesList';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/TmdbAPI';

const Home = () => {
  const [moviesTrending, setMoviesTrending] = useState([]);
  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await getTrendingMovies();

        setMoviesTrending(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      {<MoviesList movies={moviesTrending} title={'Trending movies today'} />}
    </div>
  );
};

export default Home;
