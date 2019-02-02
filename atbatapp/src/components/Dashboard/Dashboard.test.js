import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard';

describe('The Dashboard component', () => {
  test('renders the Dashboard component', () => {
    render(<Dashboard />);
  });
  
});
