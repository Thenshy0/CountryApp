import SearchBar from './SearchBar';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../app/store';
import { fetchCountries, setPage, selectAllCountries } from '../redux/countrySlice';
import CountryBody from '../components/CountryBody';
import CountryHead from '../components/CountryHead';
import LoadingSpin from './LoadingSpin';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const CountryFull = () => {
  const dispatch = useDispatch<AppDispatch>();
  const countries = useSelector(selectAllCountries);
  const countryStatus = useSelector((state: any) => state.countryR.status);
  const error = useSelector((state: any) => state.countryR.error);
  const { searchTerm } = useSelector((state: RootState) => state.searchR);
  const { page, pageSize } = useSelector((state: RootState) => state.countryR);
  useEffect(() => {
    if (countryStatus === 'idle') {
      dispatch(fetchCountries());
    }
  }, [countryStatus, dispatch]);

  const handlePrevClick = () => {
    dispatch(setPage(page - 1));
    dispatch(fetchCountries());
  };

  const handleNextClick = () => {
    dispatch(setPage(page + 1));
    dispatch(fetchCountries());
  };
  let content;

  if (countryStatus === 'loading') {
    content = <LoadingSpin />;
  } else if (countryStatus === 'succeeded') {
    content = (
      <div>
        <table>
          <thead>
            <CountryHead />
          </thead>
          <tbody>
            {countries
              .filter((result) => {
                if (searchTerm === '') {
                  return result;
                } else if (result.name.common.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return result;
                }
              })
              .slice(pageSize * (page - 1), pageSize * page)
              .map((country) => {
                return <CountryBody country={country} key={country.name.common} />;
              })}
          </tbody>
        </table>
        <span className="pagination">
          <button onClick={handlePrevClick} disabled={page === 1}>
            <ArrowBackIosIcon id="arrow_icon" />
          </button>
          <button onClick={handleNextClick}>
            <ArrowForwardIosIcon id="arrow_icon" />
          </button>
        </span>
      </div>
    );
  } else if (countryStatus === 'failed') {
    content = <div>{error}</div>;
  }
  return (
    <div>
      <SearchBar />
      <section>
        <div className="country_table">{content}</div>
      </section>
    </div>
  );
};

export default CountryFull;
