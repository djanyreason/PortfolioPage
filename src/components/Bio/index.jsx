import { Paper } from '@mui/material';

import Content from './Content';

const Bio = () => {
  return (
    <Paper elevation={16} sx={{ p: 1.5, my: 1.5 }}>
      <Content />
    </Paper>
  );
};

export default Bio;
