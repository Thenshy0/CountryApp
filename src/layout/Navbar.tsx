import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import PublicIcon from '@mui/icons-material/Public';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { pink } from '@mui/material/colors';

const Navbar = () => {
  return (
    <div className="navbarlink">
      <div>
        <>
          {' '}
          <Link to="/" className="navbarlink">
            <HomeIcon sx={{ color: pink[500] }} />
          </Link>
        </>
        <>
          {' '}
          <Link to="/countrylist" className="navbarlink">
            <PublicIcon sx={{ color: pink[500] }} />
          </Link>
        </>
        <>
          {' '}
          <Link to="/favourites" className="navbarlink">
            <StarIcon sx={{ color: pink[500] }} />
          </Link>
        </>{' '}
      </div>
    </div>
  );
};

export default Navbar;
