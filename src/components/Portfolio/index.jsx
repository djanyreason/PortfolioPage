import { useState } from 'react';

const Portfolio = () => {
  const [count, setCount] = useState(0);

  const incCount = (event) => {
    event.preventDefault();
    setCount(count + 1);
  };

  return (
    <div>
      <p>This is the Portfolio Section</p>
      <p>Portfolio Click Count: {count}</p>
      <button onClick={incCount}>Portfolio Increment</button>
    </div>
  );
};

export default Portfolio;
