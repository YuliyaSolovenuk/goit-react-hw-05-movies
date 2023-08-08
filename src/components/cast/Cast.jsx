import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/TmdbAPI';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const response = await getMovieCast(movieId);

        setCast(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast ? (
          cast.map(({ id, name, character, profile_path }) => {
            return (
              <li key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                  alt={name}
                />
                <h4>{name}</h4>
                <p>Character:&nbsp;{character}</p>
              </li>
            );
          })
        ) : (
          <p>We don't have any information about actors</p>
        )}
      </ul>
    </div>
  );
};
export default Cast;
