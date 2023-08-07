import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  // const location = useLocation();

  return (
    <div>
      <ul>
        {movies.map(({id, title, poster_path }) => (
          <li key={id}>
            <Link
              to={`/movies/${id}`}
              //   state={{ from: location }}
            >
              <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title} />
              <p>{title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
