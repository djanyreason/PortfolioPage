import { Typography, Link, createTheme, ThemeProvider } from '@mui/material';

const HeaderLink = ({ label, url }) => {
  const theme = createTheme({
    typography: {
      h6: {
        fontSize: '1.125rem',
        '@media (min-width:850px)': { fontSize: '1.25rem' },
        '@media (min-width:950px)': { fontSize: '1.375rem' },
        '@media (min-width:1025px)': { fontSize: '1.50rem' },
        fontStyle: 'italic',
        color: '#333333',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Typography variant='h6' textAlign='right'>
        {label}
        {':'}
      </Typography>
      <Typography variant='h6' textAlign='right'>
        <Link
          href={url}
          target='_blank'
          rel='noreferrer'
          color='#3e5060'
          underline='hover'
        >
          {url}
        </Link>
      </Typography>
    </ThemeProvider>
  );
};

export default HeaderLink;
