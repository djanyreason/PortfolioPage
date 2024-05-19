import { createSlice } from '@reduxjs/toolkit';

const displaySlice = createSlice({
  name: 'display',
  initialState: 'Mobile',
  reducers: {
    updateDisplay(state, action) {
      return action.payload >= 400
        ? action.payload >= 640
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
