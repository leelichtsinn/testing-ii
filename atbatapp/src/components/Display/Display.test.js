import React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './Display';

afterEach(cleanup);

describe('The Display component', () => {
  // test('renders the Display component', () => {
  //   render(<Display />);
  // });

  it('renders the count of balls and strikes passed in', () => {
    const { getByText } = render(<Display balls='2' strikes='1' />);

    getByText(/2 balls/i);
    getByText(/1 strikes/i);
  });

  it('render display header', () => {
    console.log('document', );
  });
});
