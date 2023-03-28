import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../app/store';
import {
  sortNameAscending,
  sortNameDescending,
  sortPopulationAscending,
  sortPopulationDescending
} from '../redux/countrySlice';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const CountryHead: FC<any> = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAscending = () => {
    dispatch(sortNameAscending());
  };
  const handleDescending = () => {
    dispatch(sortNameDescending());
  };
  const handleAscendingPopulation = () => {
    dispatch(sortPopulationAscending());
  };
  const handleDescendingPopulation = () => {
    dispatch(sortPopulationDescending());
  };
  return (
    <tr>
      <th>Flag</th>
      <th>
        Name <KeyboardArrowUpIcon id="arrow_up" onClick={handleAscending} />
        <KeyboardArrowDownIcon id="arrow_up" onClick={handleDescending} />
      </th>
      <th>Region</th>
      <th>
        Population
        <KeyboardArrowUpIcon id="arrow_up" onClick={handleAscendingPopulation} />
        <KeyboardArrowDownIcon id="arrow_up" onClick={handleDescendingPopulation} />
      </th>
      <th>Languages</th>
      <th>Favourites</th>
      <th>Details</th>
    </tr>
  );
};

export default CountryHead;
