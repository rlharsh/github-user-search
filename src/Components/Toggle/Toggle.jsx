import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';

import '../../assets/css/Toggle.css';
import Sun from '../../assets/svg/sun.svg';
import Moon from '../../assets/svg/moon.svg';

const Toggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className='toggle-container' onClick={toggleTheme} role="switch">
            <p className={theme}>{ theme.toUpperCase() }</p>
            {
                theme === 'dark' ? <img src={Sun} alt='Switch to light theme.' aria-label='Theme toggle switch.' /> : <img src={Moon} alt='Switch to dark theme.' />
            }
        </div>
    );
}

export default Toggle