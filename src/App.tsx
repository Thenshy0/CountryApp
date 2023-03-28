import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CountryList from './pages/CountryList';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
import Country from './pages/Country';
import Favourites from './pages/Favourites';
import Home from './pages/Home';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Error from './pages/Error';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <BrowserRouter>
      <header id={isDarkMode ? 'dark-mode' : ''}>
        <div className="navbarapp">
          <h1 id="navbar_h1">CountryApp</h1>
          <Navbar />
          <Brightness4Icon id="darkmode_icon" onClick={toggleDarkMode}>
            {isDarkMode ? 'Light' : 'Dark'}
          </Brightness4Icon>
        </div>
      </header>
      <div className="App" id={isDarkMode ? 'dark-mode' : ''}>
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/favourites" element={<Favourites />}></Route>
            <Route path="/countrylist" element={<CountryList />}></Route>
            <Route path="/country" element={<Country />}></Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <footer id={isDarkMode ? 'dark-mode' : ''}>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
