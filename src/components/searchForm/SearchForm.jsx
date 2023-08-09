import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { FaSearch } from 'react-icons/fa';
import css from './SearchForm.module.css';
import { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const handleChange = e => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmitSearch = e => {
    e.preventDefault();
    if (!query.trim()) {
      toast('Enter a search query!');
      return;
    }
    onSubmit(query);
    setQuery('');
    e.target.reset();
  };

  return (
    <div>
      <form className={css.searchForm} onSubmit={handleSubmitSearch}>
        <button type="submit" className={css.searchFormButton}>
          <span className={css.searchFormButtonLabel}>
            <FaSearch style={{ fontSize: '1.4rem' }} />
          </span>
        </button>

        <input
          className={css.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
