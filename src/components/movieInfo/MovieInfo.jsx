import PropTypes from 'prop-types';
import css from './MovieInfo.module.css';

const MovieInfo = ({
  title,
  vote_average,
  overview,
  genres,
  backdrop_path,
}) => {
  return (
    <div className={css.infoWrapper}>
      <div className={css.infoImgWrapper}>
        <img
          src={`https://image.tmdb.org/t/p/w300/${backdrop_path}`}
          alt="title"
        />
      </div>
      <div className={css.infoDescrWrapper}>
        <h2>{title}</h2>
        <p>
          <b>User Score:</b> {Math.round(vote_average * 10)}%
        </p>
        <p>
          <b>
            Overview
            <br />
          </b>
          {overview}
        </p>
        <p>
          <b>Genres</b>
        </p>
        {genres && (
          <ul>
            {genres.map(({ id, name }) => {
              return <li key={id}>{name}</li>;
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

MovieInfo.propTypes = {
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  backdrop_path: PropTypes.string.isRequired,
};

export default MovieInfo;
