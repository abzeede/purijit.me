import React, { Component } from 'react';
import Typing from './components/Typing'
import './App.css';

const MESSAGE = `Purijit.me is under construction\n\nComing Soon...`
const CPMS = 125 // Character per minute
const DELAY = 3500  // delay in millisecond

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <h1 className="welcome-text">
          <Typing message={MESSAGE} delay={DELAY} cpms={CPMS} />
        </h1>
      </div>
    );
  }
}

export default App;
