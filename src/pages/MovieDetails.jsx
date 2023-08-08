import axios from 'axios';
import MovieDetailsLink from 'components/movieDetailsLink/MovieDetailsLink';
import MovieInfo from 'components/movieInfo/MovieInfo';
// import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
    const location = useLocation();
const goBackLink = location?.state?.from || '/';
  const {movieId} = useParams();
  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=1bb674914a73bcdd70cc8fd8d868be33`
        );

        setMovieInfo(response.data);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    getMovieDetails();
  }, [movieId]);



  return (
    <div>
      <button type='button'>
      <Link to={goBackLink}>Go Back</Link>
      </button>
      <MovieInfo {...movieInfo}/>
      <MovieDetailsLink/>
      <Outlet/>
    </div>
  );
};

export default MovieDetails;
