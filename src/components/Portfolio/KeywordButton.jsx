import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@mui/material';

import { selectKeyword } from '../../reducers/filterReducer';

const KeywordButton = ({ kword }) => {
  const dispatch = useDispatch();
  const exclusive = useSelector(({ filter }) => filter.exact);

  const handleClick = (event) => {
    event.preventDefault();

    dispatch(selectKeyword(kword));
  };

  const buttonStyle = { mr: 0.25, my: 0.25, py: 0, px: 0.5, fontSize: 12 };

  return (
    <Button
      variant='contained'
      onClick={handleClick}
      color='success'
      disabled={exclusive}
      size='small'
      sx={buttonStyle}
    >
      {kword}
    </Button>
  );
};

export default KeywordButton;
