import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import countryReducer from '../redux/countrySlice';
import searchReducer from '../redux/searchSlice';

export const store = configureStore({
  reducer: {
    countryR: countryReducer,
    searchR: searchReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
