import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/TmdbAPI';
import fallbackImage from '../../image/no-photo.png';
import css from './Cast.module.css';

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

  if (!cast) return;

  return (
    <div className={css.castContainer}>
      <ul className={css.castWrapper}>
        {cast.length ? (
          cast.map(({ id, name, character, profile_path }) => {
            return (
              <li className={css.itemActor} key={id}>
                <img
                  className={`${css.img} css.fallbackImage`}
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w300/${profile_path}`
                      : fallbackImage
                  }
                  alt={name}
                />
                <h4 className={css.nameActor}>{name}</h4>
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
