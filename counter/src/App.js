import React, { Component } from 'react';
import './App.css';
import CounterContainer from './containers/CounterDisplay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterContainer />
      </div>
    );
  }
}

export default App;
