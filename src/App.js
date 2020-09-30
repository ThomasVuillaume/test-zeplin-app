import React from 'react';
import logo from './logo.svg';
import './App.css';
import AwButton from './components/awesomeButton'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AwButton/>
      </header>
    </div>
  );
}

export default App;
