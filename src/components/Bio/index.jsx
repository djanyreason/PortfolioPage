import {
  Paper,
  Typography,
  Link,
  createTheme,
  ThemeProvider,
} from '@mui/material';

const Bio = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ['cursive', 'Englebert', 'Patrick Hand'],
      body1: {
        marginBottom: '0.5rem',
        fontSize: '1.25rem',
      },
    },
  });

  return (
    <Paper elevation={4} sx={{ p: 1.5, my: 1.5 }}>
      <ThemeProvider theme={theme}>
        <Typography variant='body1'>{'Biographical Summary:'}</Typography>
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
          >
            {'Full Stack Open "Deep Dive Into Modern Web Development"'}
          </Link>
          {' sequence, and '}
          <Link
            href='https://www.theodinproject.com/paths/foundations/courses/foundations'
            target='_blank'
            rel='noreferrer'
          >
            {'The Odin Project Foundations Course.'}
          </Link>
        </Typography>
        <Typography variant='body1'>
          {
            'Below are a list of personal projects and projects completed as a part of Full Stack Open and The Odin Project. It also includes the ability to filter by project keyword.'
          }
        </Typography>
      </ThemeProvider>
    </Paper>
  );
};

export default Bio;
