import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard';

describe('The Dashboard component', () => {
  test('renders the Dashboard component', () => {
    render(<Dashboard />);
  });

  it('renders the strike button', () => {
    const { getByText, getByTestId } = render(<Dashboard />);
    const strikeButton = getByTestId('strike-button');
    getByText(/strike/i);
  });
  it('renders the ball button', () => {
    const { getByText, getByTestId } = render(<Dashboard />);
    const ballButton = getByTestId('strike-button');
    getByText(/ball/i);
  });
  it('renders the foul button', () => {
    const { getByText, getByTestId } = render(<Dashboard />);
    const foulButton = getByTestId('strike-button');
    getByText(/foul/i);
  });
  it('renders the hit button', () => {
    const { getByText, getByTestId } = render(<Dashboard />);
    const hitButton = getByTestId('strike-button');
    getByText(/hit/i);
  });
});
