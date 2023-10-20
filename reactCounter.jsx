import React, { useState } from 'react';

const Counter = () => {
 
  const [count, setCount] = useState(0);

  
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default Counter;
