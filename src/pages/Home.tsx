import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppDispatch } from '../app/store';
import { setSearchTerm } from '../redux/searchSlice';

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  dispatch(setSearchTerm(''));
  return (
    <div>
      <div className="home">
        <h2> ⬅ Click to see the countries</h2>
        <Link to="/countrylist">
          <img
            className="country_homepic"
            src="https://i.postimg.cc/LXqV3RqD/gael-gaborel-orbisterrae-f7-I8u-Ei-Ykag-unsplash-1.png"
            alt="country"></img>
        </Link>
      </div>
    </div>
  );
};

export default Home;
