import Projects from './Projects';

const testProjData = [
  {
    name: 'FSO_02',
    url: 'https://github.com/djanyreason/FSO_02',
    about:
      'This repository is for exercises in Part 2 of Full Stack Open, "Communicating with server". The projects in this repo are all basic front-end-only web apps built in React, which interact with local and remote servers using Axios.',
    keywords: ['react', 'axios', 'json-server', 'react-css'],
  },
];

const Portfolio = () => {
  return (
    <div>
      <Projects projectList={testProjData} />
    </div>
  );
};

export default Portfolio;
