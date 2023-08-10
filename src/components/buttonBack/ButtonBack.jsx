import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from './ButtonBack.module.css';

const ButtonBack = ({ goBackLink }) => {
  return (
    <button className={css.btnBack} type="button">
      <Link className={css.btnLink} to={goBackLink}>
        Go Back
      </Link>
    </button>
  );
};

ButtonBack.propTypes = {
  goBackLink: PropTypes.any,
};

export default ButtonBack;
