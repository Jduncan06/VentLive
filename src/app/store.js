<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
  reducer: {
  },
=======
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { getDefaultNormalizer } from '@testing-library/react';
import { showsReducer } from '../features/dates/datesSlice';

export const store = configureStore({
  reducer: {
    shows: showsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
>>>>>>> 9be311aabf107c944ec907defe7527209f77d991
});