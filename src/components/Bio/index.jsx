import { useState } from 'react';

const Bio = () => {
  const [count, setCount] = useState(0);

  const incCount = (event) => {
    event.preventDefault();
    setCount(count + 1);
  };

  return (
    <div>
      <p>This is the Bio Section</p>
      <p>Bio Click Count: {count}</p>
      <button onClick={incCount}>Bio Increment</button>
    </div>
  );
};

export default Bio;
