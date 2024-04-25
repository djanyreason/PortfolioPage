import { configureStore } from '@reduxjs/toolkit';
import projectReducer from './reducers/projectReducer';

const store = configureStore({
  reducer: {
    projects: projectReducer,
  },
});

export default store;
