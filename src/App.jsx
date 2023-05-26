import { createContext, useEffect, useState } from 'react'
import { ThemeContext } from './ThemeContext';
import './assets/css/app.css'
import Header from './Components/Header/Header';
import Search from './Components/Search/Search';

function App() {
  const [theme, setTheme] = useState('light');
  const [user, setUser] =  useState(null);

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }, []);

  const searchUser = (username) => {
    setUser(username);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className='app-container'>
        <Header />
        <Search searchUser={ searchUser }/>
      </div>
    </ThemeContext.Provider>
  )
}

export default App