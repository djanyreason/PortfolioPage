import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Button, Link, Typography, Box } from '@mui/material';

const Project = ({ proj }) => {
  const [detail, setDetail] = useState('true');
  const toggleDetail = () => setDetail(!detail);

  const mobileView = useSelector(({ display }) => display === 'Mobile');

  const detailStyle = {
    mb: 0.5,
    display: detail ? 'none' : 'block',
  };
  const buttonStyle = { pt: 0.125, px: 0.5, pb: 0 };

  return (
    <Box>
      <Typography variant='body1' sx={{ mb: 0.5 }}>
        {!detail && !mobileView ? (
          proj.name
        ) : (
          <Link
            href={proj.url ? proj.url : proj.repo}
            target='_blank'
            rel='noreferrer'
          >
            {proj.name}
          </Link>
        )}{' '}
        {mobileView ? null : (
          <Button
            variant={'outlined'}
            color='secondary'
            size='small'
            onClick={toggleDetail}
            sx={buttonStyle}
          >
            {detail ? 'show details' : 'hide details'}
          </Button>
        )}
      </Typography>
      {mobileView ? (
        proj.url ? (
          <Typography variant='body2' sx={detailStyle}>
            <Link href={proj.repo} target='_blank' rel='noreferrer'>
              Repository
            </Link>
          </Typography>
        ) : null
      ) : (
        <Typography variant='body2' sx={detailStyle}>
          Repository:{' '}
          <Link href={proj.repo} target='_blank' rel='noreferrer'>
            {proj.repo}
          </Link>
        </Typography>
      )}
      {!mobileView && proj.url ? (
        <Typography variant='body2' sx={detailStyle}>
          Website:{' '}
          <Link href={proj.url} target='_blank' rel='noreferrer'>
            {proj.url}
          </Link>
        </Typography>
      ) : null}
      <Typography variant='body2' sx={detailStyle}>
        {proj.about}
      </Typography>
      <Typography variant='body2' sx={detailStyle}>
        Keywords:{' '}
        {proj.keywords.reduce(
          (str, kword) => (str === '' ? kword : str + ', ' + kword),
          ''
        )}
      </Typography>
      {mobileView ? (
        <Button
          variant={detail ? 'contained' : 'outlined'}
          color='primary'
          size='small'
          onClick={toggleDetail}
          sx={{ ...buttonStyle, width: '100%' }}
        >
          {detail ? 'show details' : 'hide details'}
        </Button>
      ) : null}
    </Box>
  );
};

export default Project;
