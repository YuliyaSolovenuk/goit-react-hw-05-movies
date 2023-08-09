import { toast } from 'react-toastify';
import MoviesList from 'components/moviesList/MoviesList';
import SearchForm from 'components/searchForm/SearchForm';
import { useEffect, useState } from 'react';
import { getSearchMovies } from 'services/TmdbAPI';

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchSearchMovies = async () => {
      try {
        const response = await getSearchMovies(searchQuery);

        setMovies(response);

        if (response.length === 0 && searchQuery !== '') {
          toast(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchSearchMovies();
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
      {searchQuery && movies && (
        <MoviesList movies={movies} title={'Movies by search query'} />
      )}
    </div>
  );
};

export default Movie;
