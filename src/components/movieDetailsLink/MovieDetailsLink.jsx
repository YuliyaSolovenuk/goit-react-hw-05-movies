import { NavLink } from 'react-router-dom';
import css from './MovieDetailsLink.module.css';

const MovieDetailsLink = () => {
  return (
    <>
    <div className={css.solidLine}></div>
    <ul className={css.listAdd}>
      <li className={css.itemAdd}>
        <NavLink className={css.linkAdd} to="movies/:movieId/cast">
          Cast
        </NavLink>
      </li>
      <li className={css.itemAdd}>
        <NavLink className={css.linkAdd} to="movies/:movieId/reviews">
          Revievs
        </NavLink>
      </li>
    </ul>
    <div className={css.solidLine}></div>
    </>
  );
};

export default MovieDetailsLink;
