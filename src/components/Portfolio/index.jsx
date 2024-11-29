import FilterSection from './FilterSection';
import ProjectList from './ProjectList';
import { useState } from 'react';

import { Paper, Typography, Button, Grid2 } from '@mui/material';

const Portfolio = () => {
  const [hideFilter, setHideFilter] = useState(true);
  const handleFilterVisibilityToggle = (event) => {
    event.preventDefault();

    setHideFilter(!hideFilter);
  };

  return (
    <Paper elevation={16} sx={{ my: 1.5 }}>
      <Grid2
        container
        paddingLeft={'6px'}
        direction={'row'}
        alignItems={'center'}
        spacing={'0.75rem'}
      >
        {' '}
        <Grid2>
          <Typography
            variant='h6'
            color='primary'
            fontSize={'1.75rem'}
            paddingLeft={'6px'}
          >
            Project List
          </Typography>
        </Grid2>
        <Grid2>
          <Button
            variant='outlined'
            color='secondary'
            sx={{ py: 0, px: 0.5 }}
            onClick={handleFilterVisibilityToggle}
          >
            {hideFilter ? 'Show Filter' : 'Hide Filter'}
          </Button>
        </Grid2>
      </Grid2>
      {hideFilter ? null : <FilterSection />}
      <ProjectList />
    </Paper>
  );
};

export default Portfolio;
