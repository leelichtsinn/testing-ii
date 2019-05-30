import React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';

import Container from './Container';

afterEach(cleanup);

describe('the display and dashboard container', () => {
  it('update strikes on click', () => {
    const { getByText, getByTestId } = render(<Container />);
    const button = getByTestId('strike-button');

    fireEvent.click(button);

    getByText(/1 strikes/i);
  });
});
