import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from './MoviesList.module.css';

const MoviesList = ({ movies, title }) => {
  return (
    <div>
      <h1 className={css.titlePage}>{title}</h1>
      <ul className={css.moviesList}>
        {movies.map(({ id, title, poster_path }) => (
          <li className={css.itemMovie} key={id}>
            <Link to={`/movies/${id}`}>
              <img
                className={css.img}
                src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                alt={title}
              />
              <p className={css.titleMovie}>{title}</p>
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
      poster_path: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default MoviesList;
