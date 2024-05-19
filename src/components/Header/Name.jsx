import { Typography, createTheme, ThemeProvider } from '@mui/material';

const Name = ({ variant }) => {
  const theme = createTheme({
    typography: {
      fontFamily: ['Dancing Script', 'cursive'],
      h1: {
        fontSize: '3.25rem',
        '@media (min-width:800px)': { fontSize: '3.75rem' },
        '@media (min-width:900px)': { fontSize: '4.25rem' },
        '@media (min-width:1000px)': { fontSize: '4.75rem' },
        '@media (min-width:1100px)': { fontSize: '5.25rem' },
        textAlign: 'right',
      },
      h2: {
        fontSize: '2.75rem',
        '@media (min-width:450px)': { fontSize: '3.00rem' },
        '@media (min-width:475px)': { fontSize: '3.25rem' },
        '@media (min-width:500px)': { fontSize: '3.50rem' },
        '@media (min-width:525px)': { fontSize: '3.75rem' },
        '@media (min-width:550px)': { fontSize: '4.00rem' },
        '@media (min-width:600px)': { fontSize: '4.25rem' },
        textAlign: 'center',
      },
      h3: {
        textAlign: 'center',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Typography variant={variant}>John F. Anderson</Typography>
    </ThemeProvider>
  );
};

export default Name;
