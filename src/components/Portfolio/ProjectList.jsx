import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import Projects from './Projects';

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

  return (
    <div>
      <Projects projectList={portfolio} />
    </div>
  );
};

export default ProjectList;
