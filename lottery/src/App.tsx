import React, { useState } from 'react';
import LotteryBall from './components/LotteryBall';
import './App.css';  

const App: React.FC = () => {
  const initialNumbers = [5, 11, 16, 23, 32];
  const [numbers, setNumbers] = useState<number[]>(initialNumbers);

  const generateNewNumbers = () => {
    const newNumbers = generateRandomNumbers();
    setNumbers(newNumbers);
  };

  const generateRandomNumbers = () => {
    const newNumbers: number[] = [];
    while (newNumbers.length < 5) {
      const randomNumber = Math.floor(Math.random() * 32) + 5;  
      if (!newNumbers.includes(randomNumber)) {
        newNumbers.push(randomNumber);
      }
    }
    return newNumbers.sort((a, b) => a - b);
  };

  return (
    <div className="app-container">
      <h1>Lottery Numbers</h1>
      <div className="lottery-balls-container">
        {numbers.map((number) => (
          <LotteryBall key={number} number={number} />
        ))}
      </div>
      <button className="new-numbers-button" onClick={generateNewNumbers}>
        New numbers
      </button>
    </div>
  );
};

export default App;