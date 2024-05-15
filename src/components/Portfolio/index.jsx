import FilterSection from './FilterSection';
import ProjectList from './ProjectList';

import { Paper } from '@mui/material';

const Portfolio = () => {
  return (
    <Paper elevation={4}>
      <FilterSection />
      <ProjectList />
    </Paper>
  );
};

export default Portfolio;
