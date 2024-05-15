import { useState } from 'react';

import { Paper } from '@mui/material';

const Bio = () => {
  const [count, setCount] = useState(0);

  const incCount = (event) => {
    event.preventDefault();
    setCount(count + 1);
  };

  return (
    <Paper elevation={4} sx={{ marginTop: '10px', marginBottom: '10px' }}>
      <div>This is the Bio Section</div>
      <p>Bio Click Count: {count}</p>
      <button onClick={incCount}>Bio Increment</button>
    </Paper>
  );
};

export default Bio;
