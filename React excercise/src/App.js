import React, { Component } from 'react';
import Display from './Display';
import './style.css';

class App extends Component {
  state={
    displayInfos:
      [
        {name: 'Mohit', age: 19, profession: 'Photographer', id:1},
        {name: 'Mohit Mehta', age: 19, profession: 'Photographer', id:2}
      ]

  }
  render() {
    return (
      <div>
          <h1> Hi, I am React App!</h1>
          <button className="switch">Switch Names</button>
          <Display displayInfos={this.state.displayInfos} />
      </div>
    );
  }
}

export default App;
