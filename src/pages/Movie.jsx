import axios from 'axios';
import { toast } from 'react-toastify';
import MoviesList from 'components/moviesList/MoviesList';
import SearchForm from 'components/searchForm/SearchForm';
import { useEffect, useState } from 'react';

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const getSearchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=1bb674914a73bcdd70cc8fd8d868be33`
        );

        setMovies(response.data.results);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    getSearchMovies();
  }, [searchQuery]);

  const handleFormSubmit = query => {
    if (searchQuery === query) {
      toast(
        'Please enter a new keyword to search.The result of this query is displayed.'
      );
      return;
    }

    setSearchQuery(query);
    setMovies([]);
  };

  return (
    <div>
      <SearchForm onSubmit={handleFormSubmit} />
      {searchQuery && (
        <MoviesList movies={movies} title={'Movies by search query'} />
      )}
    </div>
  );
};

export default Movie;
