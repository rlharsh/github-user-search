import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';

import '../../assets/css/Header.css';
import Toggle from '../Toggle/Toggle';

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <section id='header' className='application-header'>
        <h1 className={theme}>
            devfinder
        </h1>
        <Toggle />
    </section>
  );
}

export default Header