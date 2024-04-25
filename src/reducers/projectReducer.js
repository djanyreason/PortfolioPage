import { createSlice } from '@reduxjs/toolkit';
import portfolioService from '../services/portfolio';

const projectSlice = createSlice({
  name: 'projects',
  initialState: [],
  reducers: {
    overwriteProjectState(state, action) {
      return action.payload;
    },
  },
});

export const initializePortfolio = () => {
  return async (dispatch) => {
    const init = await portfolioService.getAll();
    dispatch(projectSlice.actions.overwriteProjectState(init));
  };
};

export default projectSlice.reducer;
