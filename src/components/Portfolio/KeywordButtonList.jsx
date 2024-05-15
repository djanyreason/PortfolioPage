import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { Box } from '@mui/material';

import KeywordButton from './KeywordButton';

const KeywordButtonList = () => {
  const getKwordList = createSelector(
    [(state) => state.portfolio, (state) => state.filter],
    (portfolio, filter) =>
      portfolio.keywords.filter(
        (kword) => kword.toLowerCase().search(filter.text.toLowerCase()) >= 0
      )
  );

  const keywordList = useSelector(getKwordList);

  if (keywordList.length > 10) return null;

  return (
    <Box sx={{ my: 0.5 }}>
      {keywordList.map((kword) => (
        <KeywordButton key={kword} kword={kword} />
      ))}
    </Box>
  );
};

export default KeywordButtonList;
