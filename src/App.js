import React, { Component } from 'react';
import './App.css';
import Players from "./players/PLayers"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Hello World</h2>
        <Players />
      </div>
    );
  }
}

export default App;
