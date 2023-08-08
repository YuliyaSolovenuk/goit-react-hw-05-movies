import { Link } from "react-router-dom";
import css from './ButtonBack.module.css'

const ButtonBack = ({goBackLink}) => {
    return(
        <button className={css.btnBack} type='button'>
      <Link className={css.btnLink} to={goBackLink}>Go Back</Link>
      </button>
    )
}

export default ButtonBack;