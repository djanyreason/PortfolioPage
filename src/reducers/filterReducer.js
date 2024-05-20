import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { text: '', exact: false },
  reducers: {
    resetFilter(state, action) {
      return {
        text: '',
        exact: state.exact,
      };
    },
    toggleExact(state, action) {
      return {
        text: state.text,
        exact: !state.exact,
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
        exact: state.exact,
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

export const toggleExact = () => {
  return (dispatch) => {
    dispatch(filterSlice.actions.toggleExact());
  };
};

export default filterSlice.reducer;
