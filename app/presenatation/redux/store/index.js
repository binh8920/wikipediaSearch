import {configureStore} from '@reduxjs/toolkit';
import searchItemReducer from '../slices/searchItem';

export const store = configureStore({
  reducer: {
    searchItem: searchItemReducer,
  },
});
