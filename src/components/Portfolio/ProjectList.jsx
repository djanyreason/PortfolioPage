import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import {
  TableContainer,
  Paper,
  Table,
  TableCell,
  TableBody,
  TableRow,
} from '@mui/material';

import Project from './Project';

const ProjectList = () => {
  const getMatchingProjects = createSelector(
    [(state) => state.portfolio, (state) => state.filter],
    (portfolio, filter) =>
      portfolio.projects.filter((project) =>
        project.keywords.find((kword) =>
          filter.exact
            ? kword.toLowerCase() === filter.text.toLowerCase()
            : kword.toLowerCase().search(filter.text.toLowerCase()) >= 0
        )
      )
  );

  const portfolio = useSelector(getMatchingProjects);

  if (portfolio.length === 0) return <div>No matching projects</div>;

  const tableStyle = {
    borderStyle: 'solid',
    borderWidth: 0,
    borderTopWidth: 1,
  };

  return (
    <TableContainer component={Paper} elevation={4}>
      <Table sx={tableStyle}>
        <TableBody>
          {portfolio.map((proj) => (
            <TableRow key={proj.id}>
              <TableCell sx={{ p: 1 }}>
                <Project proj={proj} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProjectList;
