import { FaSearch } from 'react-icons/fa';
import css from './SearchForm.module.css';
import { useState } from "react";

const SearchForm = ({onSubmit}) => {
 const [query, setQuery] = useState('');
    const handleChange = e => {
        setQuery( e.currentTarget.value);
      };
    
      const handleSubmitSearch = e => {
        e.preventDefault();
        if (!query.trim()) {
        //   toast.warning('Enter a search query!');
          return;
        }
        onSubmit(query);
        setQuery('');
        e.target.reset();
      };

    return (
        <form className={css.searchForm} onSubmit={handleSubmitSearch}>
        <button type="submit" className={css.searchFormButton}>
          <span className={css.searchFormButtonLabel}>
            <FaSearch/>
            &nbsp;Search
          </span>
        </button>

        <input
          className={css.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
    )
}

export default SearchForm;