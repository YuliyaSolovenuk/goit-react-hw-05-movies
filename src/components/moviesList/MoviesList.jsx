import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';
import fallbackImage from '../../image/no-photo.png'

const MoviesList = ({ movies, title }) => {
  const location = useLocation();

  return (
    <div>
      <h1 className={css.titlePage}>{title}</h1>
      <ul className={css.moviesList}>
        {movies.map(({ id, title, poster_path }) => (
          <li className={css.itemMovie} key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
            <div className={css.link}>
              <img
                className={css.img}
                src={poster_path ? (`https://image.tmdb.org/t/p/w300/${poster_path}`) : fallbackImage}
                alt={title}
              />
             <p className={css.titleMovie}>{title}</p></div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default MoviesList;
