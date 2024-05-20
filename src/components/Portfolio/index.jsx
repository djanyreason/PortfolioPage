import FilterSection from './FilterSection';
import ProjectList from './ProjectList';

import { Paper } from '@mui/material';

const Portfolio = () => {
  return (
    <Paper elevation={4} sx={{ my: 1.5 }}>
      <FilterSection />
      <ProjectList />
    </Paper>
  );
};

export default Portfolio;
