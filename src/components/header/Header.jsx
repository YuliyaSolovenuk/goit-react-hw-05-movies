import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <nav>
        <ul className={css.navList}>
          <li className={css.navItem}>
            <NavLink className={css.navLink} to="/">
              Home
            </NavLink>
          </li>
          <li className={css.navItem}>
            <NavLink className={css.navLink} to="/movies" >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
