import { configureStore } from '@reduxjs/toolkit';
import projectReducer from './reducers/projectReducer';
import filterReducer from './reducers/filterReducer';
import displayReducer from './reducers/displayReducer';

const store = configureStore({
  reducer: {
    portfolio: projectReducer,
    filter: filterReducer,
    display: displayReducer,
  },
});

export default store;
