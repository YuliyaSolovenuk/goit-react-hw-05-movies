import ButtonBack from 'components/buttonBack/ButtonBack';
import MovieDetailsLink from 'components/movieDetailsLink/MovieDetailsLink';
import MovieInfo from 'components/movieInfo/MovieInfo';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/TmdbAPI';

const MovieDetails = () => {
  const location = useLocation();
  const goBackLink = location?.state?.from ?? '/';
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await getMovieDetails(movieId);

        setMovieInfo(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieInfo) return;

  return (
    <div>
      <ButtonBack goBackLink={goBackLink} />
      <MovieInfo {...movieInfo} />
      <MovieDetailsLink />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
