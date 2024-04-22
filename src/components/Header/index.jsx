import { useState } from 'react';

const Header = () => {
  const [count, setCount] = useState(0);

  const incCount = (event) => {
    event.preventDefault();
    setCount(count + 1);
  };

  return (
    <div>
      <p>This is the Header Section</p>
      <p>Header Click Count: {count}</p>
      <button onClick={incCount}>Header Increment</button>
    </div>
  );
};

export default Header;
