import React from 'react';

const ButtonClicker = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <h1>Button Clicker</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default ButtonClicker;
