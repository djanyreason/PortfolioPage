import { createSlice } from '@reduxjs/toolkit';
import portfolioService from '../services/portfolio';

const projectSlice = createSlice({
  name: 'portfolio',
  initialState: { projects: [], keywords: [] },
  reducers: {
    overwriteProjectState(state, action) {
      return {
        projects: action.payload,
        keywords: [
          ...new Set(
            action.payload.reduce(
              (merge, project) => merge.concat(project.keywords),
              []
            )
          ),
        ],
      };
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
