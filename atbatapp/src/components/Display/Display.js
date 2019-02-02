import React, { Component } from 'react';

class Display extends Component {
  // keep track of balls and strikes with state
  state = {
    ballCount: 0,
    strikeCount: 0
  }

  render() {
    return (
      <div>
        <div>
          {/* display ballCount from state */}
          <h2>Balls:</h2>
          <div>{this.state.ballCount}</div>
        </div>
        <div>
          {/* display strikeCount from state */}
          <h2>Strikes:</h2>
          <div>{this.state.strikeCount}</div>
        </div>
      </div>
    )
  }
}

export default Display;
