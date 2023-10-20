import React from 'react';
import Greeting from './Greeting'; 

function App() {
  const userName = "John"; 
  return (
    <div>
      <Greeting name={userName} />
    </div>
  );
}

export default App;
