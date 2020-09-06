import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chart1 from './chart_1';
import Chart2 from './chart_2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chart1 />
        <Chart2 />
      </header>
    </div>
  );
}

export default App;
