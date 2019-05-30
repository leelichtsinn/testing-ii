import React, { Component } from 'react';

class Dashboard extends Component {
  // constructor() {
  //
  // }

  render() {
    return (
      <div>
        <button data-testid='strike-button'>Strike</button>
        <button data-testid='ball-button'>Ball</button>
        <button data-testid='foul-button'>Foul</button>
        <button data-testid='hit-button'>Hit</button>
      </div>
    );
  }
}

export default Dashboard;
