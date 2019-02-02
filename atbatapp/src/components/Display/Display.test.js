import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './Display';

describe('The Display component', () => {
  test('renders the Display component', () => {
    render(<Display />);
  });
});
