import { Typography, createTheme, ThemeProvider } from '@mui/material';

const Name = ({ variant }) => {
  const theme = createTheme({
    typography: {
      fontFamily: ['Dancing Script', 'cursive'],
      h1: {
        fontSize: '2.75rem',
        '@media (min-width:700px)': {
          fontSize: '3.25rem',
        },
        '@media (min-width:800px)': { fontSize: '3.75rem' },
        '@media (min-width:900px)': { fontSize: '4.25rem' },
        '@media (min-width:1000px)': { fontSize: '4.75rem' },
        '@media (min-width:1100px)': { fontSize: '5.25rem' },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Typography variant={variant} textAlign='right'>
        John F. Anderson
      </Typography>
    </ThemeProvider>
  );
};

export default Name;
