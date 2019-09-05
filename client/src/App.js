import React, { useState } from 'react';
import './App.css';
import Display from './components/Display.js';
import Dashboard from './components/Dashboard.js';

function App() {
  const [strikeCount, setStrikeCount] = useState(0);
  const [ballCount, setBallCount] = useState(0);


  const strikeClick = () => {
    if (strikeCount === 2) {
      setStrikeCount(0);
      setBallCount(0);
    } else {
      setStrikeCount(strikeCount+1);
    }
  };
  const ballClick = () => {
    if (ballCount === 3) {
      setStrikeCount(0);
      setBallCount(0);
    } else {
      setBallCount(ballCount+1);
    }
  };
  const foulClick = () => {
    if (strikeCount !== 2) {
      setStrikeCount(strikeCount+1);
    }
  };
  const hitClick = () => {
    setStrikeCount(0);
    setBallCount(0);
  };
  return (
    <div className="App">
      <Display strikes={strikeCount} balls={ballCount} />
      <Dashboard strike={strikeClick}
                ball={ballClick}
                foul={foulClick}
                hit={hitClick} />
    </div>
  );
}

export default App;
