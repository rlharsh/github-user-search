import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';

import '../../assets/css/Toggle.css';
import Sun from '../../assets/svg/sun.svg';
import Moon from '../../assets/svg/moon.svg';

const Toggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className='toggle-container' onClick={toggleTheme}>
            <h4 className={theme}>{ theme.toUpperCase() }</h4>
            {
                theme === 'dark' ? <img src={Sun} alt='Switch to light theme.' /> : <img src={Moon} alt='Switch to dark theme.' />
            }
        </div>
    );
}

export default Toggle