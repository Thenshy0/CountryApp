import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../app/store';
import { Country, CountryState } from '../types/country';
import { toast } from 'react-toastify';
export const fetchCountries = createAsyncThunk<Country[]>('country/fetchCountries', async () => {
  const response = await axios.get('https://restcountries.com/v3.1/all');
  return response.data;
});

const initialState: CountryState = {
  countries: [],
  status: 'idle',
  error: null,
  sort: [],
  favourites: [],
  shift: null,
  page: 1,
  pageSize: 10
};

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    sortNameAscending: (state) => {
      let sortedCountries = [...state.countries];
      state.countries = sortedCountries.sort((a: Country, b: Country) =>
        a.name.common.localeCompare(b.name.common)
      );
    },
    sortNameDescending: (state) => {
      let sortedCountries = [...state.countries];
      state.countries = sortedCountries.sort((a: Country, b: Country) =>
        b.name.common.localeCompare(a.name.common)
      );
    },
    sortPopulationDescending: (state) => {
      state.countries.sort((a, b) => b.population - a.population);
    },
    sortPopulationAscending: (state) => {
      state.countries.sort((a, b) => a.population - b.population);
    },
    addFavourite: (state, action) => {
      let existingCountry = state.favourites.find(
        (country: any) => country.name.common === action.payload.name.common
      );
      if (!existingCountry) {
        state.favourites.push(action.payload);
        toast(`Successfully added a favourite country`);
      } else {
        state.favourites = state.favourites.filter(
          (country: any) => country.name.common !== action.payload.name.common
        );
        toast('Removed a favourite country');
      }
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.countries = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = 'failed';
      });
  }
});

export const {
  sortNameAscending,
  sortNameDescending,
  addFavourite,
  setPage,
  sortPopulationDescending,
  sortPopulationAscending
} = countrySlice.actions;
export default countrySlice.reducer;

export const selectAllCountries = (state: RootState) => state.countryR.countries;
