import React, { Component } from 'react';

import Display from '../Display/Display';
import Dashboard from '../Dashboard/Dashboard';

class Container extends Component {
  render() {
    return (
      <>
        <Display
          balls={2}
          strikes={1}
        />
        <Dashboard />
      </>
    );
  }
}

export default Container;
