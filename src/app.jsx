import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import logo from '../public/logo.png'; 
import Chart1 from './chart_1';
import Chart2 from './chart_2';
import Chart3 from './chart_3';

class App extends React.Component {	
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{width: 30, height: 30}} />
        <p>
          Edit <code>src/app.jsx</code> and tap.... on the play button.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Chart1 />
        <Chart2 />
        <Chart3 />
      </header>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
