import { createSlice } from '@reduxjs/toolkit';

const displaySlice = createSlice({
  name: 'display',
  initialState: 'Mobile',
  reducers: {
    updateDisplay(state, action) {
      return action.payload > 480
        ? action.payload > 768
          ? 'Wide'
          : 'Narrow'
        : 'Mobile';
    },
  },
});

export const setDisplay = (viewportWidth) => {
  return (dispatch) => {
    dispatch(displaySlice.actions.updateDisplay(viewportWidth));
  };
};

export default displaySlice.reducer;
