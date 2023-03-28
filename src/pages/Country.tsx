import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ReplyIcon from '@mui/icons-material/Reply';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Country = () => {
  const { state } = useLocation();

  return (
    <div className="country_body">
      <section className="country_card">
        <div className="country_details">
          <img src={state.flags.png} alt="flag" width="150" className="country_details"></img>
          <h1 id="country_card_h1">{state.name.common}</h1>
          <p className="country_details">
            Official name of {state.name.common} is {state.name.official}.
          </p>
          <p className="country_details">
            Capital city of {state.name.common} is {state.capital}.
          </p>

          <p className="country_details">Region: {state.region}</p>
          <p className="country_details">Time zone: {state.timezones}</p>
          <span className="country_details">
            {' '}
            Languages:
            {state.languages &&
              (Object.values(state.languages) as string[]).map((language) => <> {language}</>)}
          </span>
          <Link to={state.maps.googleMaps} target="blank">
            <LocationOnIcon id="maplink" />
          </Link>
          <div className="country_details">
            <Link to="/countrylist">
              {' '}
              <ReplyIcon id="replyback" />{' '}
            </Link>{' '}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Country;
