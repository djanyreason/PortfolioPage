import { useState } from 'react';

const Project = ({ proj }) => {
  const [detail, setDetail] = useState('true');
  const toggleDetail = () => setDetail(!detail);

  const detailStyle = { marginBottom: 5, display: detail ? 'none' : '' };
  const projStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    borderStyle: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  };

  return (
    <div style={projStyle}>
      {!detail ? (
        proj.name
      ) : (
        <a href={proj.url} target='_blank' rel='noreferrer'>
          {proj.name}
        </a>
      )}
      <button
        onClick={toggleDetail}
        style={{ marginLeft: 10, marginBottom: 5 }}
      >
        {detail ? 'show details' : 'hide details'}
      </button>
      <div style={detailStyle}>
        <a href={proj.url} target='_blank' rel='noreferrer' style={detailStyle}>
          {proj.url}
        </a>
      </div>
      <div style={detailStyle}>{proj.about}</div>
      <div style={detailStyle}>
        Keywords:{' '}
        {proj.keywords.reduce(
          (str, kword) => (str === '' ? kword : str + ', ' + kword),
          ''
        )}
      </div>
    </div>
  );
};

export default Project;
