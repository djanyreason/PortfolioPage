import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { text: '', exact: false },
  reducers: {
    resetFilter(state, action) {
      return {
        text: '',
        exact: false,
      };
    },
    pickKeyword(state, action) {
      return {
        text: action.payload,
        exact: true,
      };
    },
    updateFilter(state, action) {
      return {
        text: action.payload,
        exact: false,
      };
    },
  },
});

export const reset = () => {
  return (dispatch) => {
    dispatch(filterSlice.actions.resetFilter());
  };
};

export const selectKeyword = (keyword) => {
  return (dispatch) => {
    dispatch(filterSlice.actions.pickKeyword(keyword));
  };
};

export const filterUpdate = (text) => {
  return (dispatch) => {
    dispatch(filterSlice.actions.updateFilter(text));
  };
};

export default filterSlice.reducer;
