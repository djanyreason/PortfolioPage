import { configureStore } from '@reduxjs/toolkit';
import projectReducer from './reducers/projectReducer';
import filterReducer from './reducers/filterReducer';

const store = configureStore({
  reducer: {
    portfolio: projectReducer,
    filter: filterReducer,
  },
});

export default store;
