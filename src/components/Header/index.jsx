import { useState } from 'react';

import { Container, Paper } from '@mui/material';

const Header = () => {
  const [count, setCount] = useState(0);

  const incCount = (event) => {
    event.preventDefault();
    setCount(count + 1);
  };

  return (
    <Paper elevation={4}>
      <p>This is the Header Section</p>
      <p>Header Click Count: {count}</p>
      <button onClick={incCount}>Header Increment</button>
    </Paper>
  );
};

export default Header;
