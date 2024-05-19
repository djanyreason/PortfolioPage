import { useDispatch, useSelector } from 'react-redux';
import { filterUpdate, reset } from '../../reducers/filterReducer';

import { Box, TextField } from '@mui/material';

import KeywordButtonList from './KeywordButtonList';

const FilterSection = () => {
  const dispatch = useDispatch();
  const filterText = useSelector(({ filter }) => filter.text);

  const handleFilterInput = (event) => {
    event.preventDefault();

    dispatch(
      event.target.value === '' ? reset() : filterUpdate(event.target.value)
    );
  };

  const filterStyle = {
    px: 0.75,
    py: 1.25,
  };

  return (
    <Box sx={filterStyle}>
      <TextField
        label='Filter by Keyword'
        type='search'
        value={filterText}
        size='small'
        onChange={handleFilterInput}
        fullWidth
        color='primary'
      />
      <KeywordButtonList />
    </Box>
  );
};

export default FilterSection;
