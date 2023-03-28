import React from 'react';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import SearchBar from '../components/SearchBar';
import CountryHead from '../components/CountryHead';
import CountryBody from '../components/CountryBody';
import { RootState } from '../app/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Favourites = () => {
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const countryStatus = useSelector((state: any) => state.countryR.status);
  const error = useSelector((state: any) => state.countryR.error);
  const { searchTerm } = useSelector((state: RootState) => state.searchR);
  const { favourites } = useAppSelector((state) => state.countryR);

  let favelements;

  if (countryStatus === 'loading') {
    favelements = <div>Loading...</div>;
  } else if (countryStatus === 'succeeded') {
    favelements = (
      <table>
        <thead>
          <CountryHead />
        </thead>
        <tbody>
          {favourites
            .filter((result: any) => {
              if (searchTerm === '') {
                return result;
              } else if (result.name.common.toLowerCase().includes(searchTerm.toLowerCase())) {
                return result;
              }
            })
            .map((country: any) => {
              return <CountryBody country={country} key={country.name.common} />;
            })}
        </tbody>
      </table>
    );
  } else if (countryStatus === 'failed') {
    favelements = <div>{error}</div>;
  }

  return (
    <div className="countries_body">
      <div className="">
        <SearchBar />
        <section>
          <h1 id="fav_title">Favourite countries</h1>
          <div>
            {favourites.length ? <div>{favelements}</div> : <h3>No favourite countries 😔</h3>}
          </div>
          <ToastContainer position="bottom-left" />
        </section>
      </div>
    </div>
  );
};

export default Favourites;
