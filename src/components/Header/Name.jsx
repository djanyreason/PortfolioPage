import { Typography, ThemeProvider } from '@mui/material';
import { createPortfolioTheme } from '../../PortfolioTheme/util';

const Name = ({ variant }) => {
  const theme = createPortfolioTheme({
    typography: {
      fontFamily: ['cursive', 'Dancing Script'],
      h1: {
        fontSize: '4.25rem',
        '@media (min-width:850px)': { fontSize: '4.75rem' },
        '@media (min-width:950px)': { fontSize: '5.25rem' },
        '@media (min-width:1025px)': { fontSize: '5.75rem' },
        textAlign: 'right',
      },
      h2: {
        fontSize: '1.50rem',
        '@media (min-width:285px)': { fontSize: '1.75rem' },
        '@media (min-width:315px)': { fontSize: '2.00rem' },
        '@media (min-width:340px)': { fontSize: '2.25rem' },
        '@media (min-width:365px)': { fontSize: '2.50rem' },
        '@media (min-width:390px)': { fontSize: '2.75rem' },
        '@media (min-width:415px)': { fontSize: '3.00rem' },
        '@media (min-width:440px)': { fontSize: '3.25rem' },
        '@media (min-width:465px)': { fontSize: '3.50rem' },
        '@media (min-width:490px)': { fontSize: '3.75rem' },
        '@media (min-width:510px)': { fontSize: '4.00rem' },
        '@media (min-width:535px)': { fontSize: '4.25rem' },
        '@media (min-width:565px)': { fontSize: '4.50rem' },
        '@media (min-width:590px)': { fontSize: '4.75rem' },
        '@media (min-width:620px)': { fontSize: '5.00rem' },
        '@media (min-width:650px)': { fontSize: '5.25rem' },
        '@media (min-width:675px)': { fontSize: '5.50rem' },
        '@media (min-width:700px)': { fontSize: '5.75rem' },
        textAlign: 'center',
      },
      h3: {
        textAlign: 'center',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Typography variant={variant} color='primary'>
        John F. Anderson
      </Typography>
    </ThemeProvider>
  );
};

export default Name;
