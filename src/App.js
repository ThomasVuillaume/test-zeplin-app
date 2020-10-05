import React from 'react';
import logo from './logo.svg';
import './App.css';
import AwButton from './components/AwesomeButton'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AwButton label="Mortel."/>
      </header>
    </div>
  );
}

export default App;
