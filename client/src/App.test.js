import React from 'react';
import ReactDOM from 'react-dom';
import App, { strikeClick } from './App';
import { render } from '@testing-library/react';


test('adds a strike', () => {
  expect(strikeClick(1), toBe(2));
  expect(strikeClick(0), toBe(1));
});

test('contains Strikes and Balls on scoreboard', () => {
  const { getByText } = render(<App />);

  getByText(/strikes/i);
  getByText(/balls/i);
})
