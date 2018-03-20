import React, { Component } from 'react';
import './App.css';

const MESSAGE = `Purijit.me is under construction\n\nComing Soon...`
const CPMS = 125 // Character per minute
const DELAY = 2500 / CPMS // delay in millisecond
let timeout

class App extends Component {
  state = {
    totalVisibilityChar: 1,
  }

  componentDidMount() {
    timeout = setInterval(()=> {
      this.setState((state) => ({
        totalVisibilityChar: state.totalVisibilityChar <= (MESSAGE.length + DELAY) ? 
          state.totalVisibilityChar + 1 : 1
      }))
    }, CPMS)
  }

  componentWillUnmount() {
    clearInterval(timeout)
  }

  renderMessage = () => (
    MESSAGE.substring(0, this.state.totalVisibilityChar -1)
  )

  shouldBlink = () => (
    this.state.totalVisibilityChar - 1 > MESSAGE.length
  )

  render() {
    return (
      <div className="app-container">
       <h1 className="welcome-text">
        {this.renderMessage()}
        <span className={`keyboard-cursor ${this.shouldBlink() ? 'blink' : ''}`}>|</span>
       </h1>
      </div>
    );
  }
}

export default App;
