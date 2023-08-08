import { NavLink } from 'react-router-dom';
import css from './MovieDetailsLink.module.css';

const MovieDetailsLink = () => {

  return (
    <>
    <div className={css.solidLine}></div>
    <h3>Additional Information</h3>
    <ul className={css.listAdd}>
      <li className={css.itemAdd}>
        <NavLink className={css.linkAdd} to="cast">
          Cast
        </NavLink>
      </li>
      <li className={css.itemAdd}>
        <NavLink className={css.linkAdd} to="reviews">
          Revievs
        </NavLink>
      </li>
    </ul>
    <div className={css.solidLine}></div>
    </>
  );
};

export default MovieDetailsLink;
