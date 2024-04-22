import Project from './Project';

const Projects = ({ projectList }) => {
  return (
    <div>
      {projectList.map((proj) => (
        <Project key={proj.name} proj={proj} />
      ))}
    </div>
  );
};

export default Projects;
