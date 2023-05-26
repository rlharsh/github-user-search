import { createContext, useEffect, useState } from 'react'
import { ThemeContext } from './ThemeContext';
import './assets/css/app.css'
import Header from './Components/Header/Header';
import Search from './Components/Search/Search';
import Card from './Components/Card/Card';

function App() {
  const token = import.meta.env.VITE_APP_GITHUB_TOKEN;

  const [theme, setTheme] = useState('light');
  const [user, setUser] =  useState(null);
  const [error, setError] = useState(false);

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    if (user !== null) {
      
    }
  }, [user])

  const searchUser = (username) => {
    try {
      fetchGithubUser(username);
    } catch (err) {
      
    }
  };

  async function fetchGithubUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`, {
    });

    const data = await response.json();

    if (response.ok) {
      setUser(data);
      setError(false);
    } else {
      setError(true);
    }
  }

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className='app-container'>
        <Header />
        <Search searchUser={searchUser} error={error}/>
        <Card user={user}/>
      </div>
    </ThemeContext.Provider>
  )
}

export default App