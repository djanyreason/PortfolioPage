import { useSelector } from 'react-redux';

import { Paper } from '@mui/material';

import MobileLayout from './MobileLayout';
import NarrowLayout from './NarrowLayout';
import WideLayout from './WideLayout';

const Header = () => {
  const viewport = useSelector(({ display }) => display);

  return (
    <Paper elevation={4} sx={{ p: 1.5 }}>
      {viewport === 'Wide' ? (
        <WideLayout />
      ) : viewport === 'Narrow' ? (
        <NarrowLayout />
      ) : (
        <MobileLayout />
      )}
    </Paper>
  );
};

export default Header;
