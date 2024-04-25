import { configureStore } from '@reduxjs/toolkit';
import projectReducer from './reducers/projectReducer';

const store = configureStore({
  reducer: {
    portfolio: projectReducer,
  },
});

export default store;
