import React, { Component } from 'react';
import './App.css';

const MESSAGE = `Purijit.me is under construction\n\nComing Soon...`
const CPMS = 100 // Character per minute
const DELAY = 15 * 100 / CPMS // 
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

  render() {
    return (
      <div className="app-container">
       <h1 className="welcome-text">{this.renderMessage()}</h1>
      </div>
    );
  }
}

export default App;
