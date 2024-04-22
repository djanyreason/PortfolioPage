const Project = ({ proj }) => {
  return (
    <div>
      <p>{proj.name}</p>
      <a href={proj.url} target='_blank' rel='noreferrer'>
        {proj.url}
      </a>
      <p>{proj.about}</p>
      <p>
        Keywords:{' '}
        {proj.keywords.reduce(
          (str, kword) => (str === '' ? kword : str + ', ' + kword),
          ''
        )}
      </p>
    </div>
  );
};

export default Project;
