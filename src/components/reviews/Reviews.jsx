import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/TmdbAPI';
import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const response = await getMovieReviews(movieId);

        setReviews(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  if (!reviews) return;

  return (
    <div className={css.reviewsWrapper}>
      <ul>
        {reviews.length ? (
          reviews.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <h4>Author:&nbsp;{author}</h4>
                <p>{content}</p>
              </li>
            );
          })
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </ul>
    </div>
  );
};
export default Reviews;
