import { Typography, Link, createTheme, ThemeProvider } from '@mui/material';

const HeaderLink = ({ label, icon, url, style }) => {
  const theme = createTheme({
    typography: {
      h6: {
        fontSize: '1.00rem',
        '@media (min-width:1000px)': { fontSize: '1.25rem' },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Typography variant='h6' textAlign='right'>
        {label}
        {': '}
        <Link href={url} target='_blank' rel='noreferrer'>
          {url}
        </Link>
      </Typography>
    </ThemeProvider>
  );
};

export default HeaderLink;
