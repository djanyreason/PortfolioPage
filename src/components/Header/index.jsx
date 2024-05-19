import { useState, useEffect } from 'react';

import { Paper } from '@mui/material';

import MobileLayout from './MobileLayout';
import NarrowLayout from './NarrowLayout';
import WideLayout from './WideLayout';

const Header = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.onresize = () => {
      setViewportWidth(window.innerWidth);
    };
  }, [viewportWidth]);

  return (
    <Paper elevation={4} sx={{ p: 1.5 }}>
      {viewportWidth >= 400 ? (
        viewportWidth >= 640 ? (
          <WideLayout />
        ) : (
          <NarrowLayout />
        )
      ) : (
        <MobileLayout />
      )}
    </Paper>
  );
};

export default Header;
