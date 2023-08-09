import { NavLink } from 'react-router-dom';
import css from './MovieDetailsLink.module.css';

const MovieDetailsLink = () => {
  return (
    <>
      <div className={css.solidLine}></div>
      <div className={css.addInfoWrapper}>
        <h3>Additional Information</h3>
        <ul className={css.listAdd}>
          <li className={css.itemAdd}>
            <NavLink
              className={({ isActive }) =>
                [isActive ? css['active'] : '', css['linkAdd']].join(' ')
              }
              to="cast"
            >
              Cast
            </NavLink>
          </li>
          <li className={css.itemAdd}>
            <NavLink
              className={({ isActive }) =>
                [isActive ? css['active'] : '', css['linkAdd']].join(' ')
              }
              to="reviews"
            >
              Revievs
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={css.solidLine}></div>
    </>
  );
};

export default MovieDetailsLink;
