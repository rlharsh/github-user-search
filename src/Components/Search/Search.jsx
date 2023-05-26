import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../ThemeContext';

import '../../assets/css/Search.css';

import Glass from '../../assets/svg/magnifying-glass.svg';

const Search = ( { searchUser }) => {
    const { theme } = useContext(ThemeContext);
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        searchUser(inputValue);
    }

    return (
        <section className="search-container">
            <form className="search-form" onSubmit={handleSubmit}>
                <input className={theme} type="text" name="username" id="username" placeholder='Search Github username...' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <img className="search-icon" src={Glass} />
                <button className='search-button' type='submit'>Search</button>
            </form>
        </section>
    );
}

export default Search