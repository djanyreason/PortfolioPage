import { createTheme } from '@mui/material';
import PortfolioTheme from '.';

export const createPortfolioTheme = (theme) => {
  const combinedTheme = createTheme({
    ...PortfolioTheme,
    ...theme,
  });

  return combinedTheme;
};
