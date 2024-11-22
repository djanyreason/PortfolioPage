import { Typography, Link, createTheme, ThemeProvider } from '@mui/material';

const Content = () => {
  console.log('Render!');

  const theme = createTheme({
    typography: {
      fontFamily: ['cursive', 'Englebert', 'Patrick Hand'],
      body1: {
        marginBottom: '0.5rem',
        fontSize: '1.25rem',
        color: '#333333',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {/*
      <Typography variant='body1'>{'Biographical Summary:'}</Typography>
      */}
      <Typography variant='body1'>
        {
          'In 2003, I graduated from the Cornell University College of Engineering with a degree in Computer Science. After a few years working in software development, I attended Law School at the University of Virginia, and since graduating in 2009 I have spent the past 15 years working in Public Service as a Budget Analyst for the US Federal Government.'
        }
      </Typography>
      <Typography variant='body1'>
        {
          'I am currently looking to transition my career back into Software Development. I have refreshed and updated my skills through the '
        }
        <Link
          href='https://fullstackopen.com/en'
          target='_blank'
          rel='noreferrer'
          color='#3e5060'
          underline='hover'
        >
          {'Full Stack Open "Deep Dive Into Modern Web Development"'}
        </Link>
        {' sequence, and '}
        <Link
          href='https://www.theodinproject.com/paths/foundations/courses/foundations'
          target='_blank'
          rel='noreferrer'
          color='#3e5060'
          underline='hover'
        >
          {'The Odin Project Foundations Course.'}
        </Link>
      </Typography>
      {/*
      <Typography variant='body1'>
        {
          'Below are a list of personal projects and projects completed as a part of Full Stack Open and The Odin Project. It also includes the ability to filter by project keyword.'
        }
      </Typography>
      */}
    </ThemeProvider>
  );
};

export default Content;
