import { useDispatch, useSelector } from 'react-redux';
import { filterUpdate, reset, toggleExact } from '../../reducers/filterReducer';

import {
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

import KeywordButtonList from './KeywordButtonList';

const FilterSection = () => {
  const dispatch = useDispatch();
  const filter = useSelector(({ filter }) => filter);

  const handleFilterInput = (event) => {
    event.preventDefault();

    dispatch(
      event.target.value === '' ? reset() : filterUpdate(event.target.value)
    );
  };

  const handleExactToggle = (event) => {
    event.preventDefault();

    dispatch(toggleExact());
  };

  const filterStyle = {
    px: 0.75,
    py: 1.25,
  };

  return (
    <FormGroup sx={filterStyle}>
      <TextField
        label='Filter by Keyword'
        type='search'
        value={filter.text}
        size='small'
        onChange={handleFilterInput}
        fullWidth
        color='primary'
      />
      <FormControlLabel
        control={
          <Checkbox checked={filter.exact} onChange={handleExactToggle} />
        }
        label='Exact Match'
        sx={{ my: -1 }}
      />
      <KeywordButtonList />
    </FormGroup>
  );
};

export default FilterSection;
