import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <nav>
        <ul className={css.navList}>
          <li className={css.navItem}>
            <NavLink
              className={({ isActive }) =>
                [isActive ? css['active'] : '', css['navLink']].join(' ')
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className={css.navItem}>
            <NavLink
              className={({ isActive }) =>
                [isActive ? css['active'] : '', css['navLink']].join(' ')
              }
              to="/movies"
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
