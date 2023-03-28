import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import StarIcon from '@mui/icons-material/Star';
import { addFavourite } from '../redux/countrySlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../app/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CountryBody: FC<any> = ({ country }) => {
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const dispatch = useDispatch<AppDispatch>();
  const { favourites } = useAppSelector((state) => state.countryR);
  const isFavourite = (country: string) => favourites.includes(country);

  const handleAddFavourite = (country: string) => {
    dispatch(addFavourite(country));
  };

  return (
    <tr>
      <td>
        <img src={country.flags.png} alt="flag" width="100"></img>
      </td>
      <td>{country.name.common}</td>
      <td>{country.region}</td>
      <td>{country.population}</td>
      <td>
        {country.languages &&
          (Object.values(country.languages) as string[]).map((language) => <li>{language}</li>)}
      </td>
      <td>
        <button
          onClick={() => handleAddFavourite(country)}
          style={{ color: isFavourite(country) ? '#e91e63' : '#a0c1b8' }}>
          <StarIcon />
        </button>
        <ToastContainer position="bottom-left" />
      </td>
      <Link to="/country" state={country} className="">
        <td>
          <ArrowForwardIosIcon id="arrow_icon" />
        </td>
      </Link>
    </tr>
  );
};

export default CountryBody;
