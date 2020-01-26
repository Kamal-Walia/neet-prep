import React from 'react';
import './App.css';
import { Header } from './components/header';
import Body from './components/body'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header title={"NeetPrep"} />
      </header>
      <Body />
    </div>
  );
}

export default App;
