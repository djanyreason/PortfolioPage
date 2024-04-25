import { useSelector } from 'react-redux';

import Projects from './Projects';

const Portfolio = () => {
  const portfolio = useSelector(({ portfolio }) => portfolio.projects);

  return (
    <div>
      <Projects projectList={portfolio} />
    </div>
  );
};

export default Portfolio;
