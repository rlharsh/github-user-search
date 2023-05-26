import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../ThemeContext';

import '../../assets/css/Search.css';

import Glass from '../../assets/svg/magnifying-glass.svg';

const Search = ( { searchUser, error }) => {
    const { theme } = useContext(ThemeContext);
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        searchUser(inputValue);
    }

    return (
        <section className={`search-container  ${theme === 'light' ? 'light' : ''}`} aria-label='Search Container'>
            <form className="search-form" onSubmit={handleSubmit}>
                <input className={theme} type="text" aria-label='Search' name="username" id="username" placeholder='Search Github username...' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <img className="search-icon" src={Glass} alt='Search Icon' />
                <button className='search-button' type='submit' aria-label='Search Button'>Search</button>
                <p className={`not-found ${error === true ? 'not-found__visible' : ''}`}>No Results</p>
            </form>
        </section>
    );
}

export default Search