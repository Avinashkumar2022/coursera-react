import { render, screen } from '@testing-library/react';
import App from './App';
import Joke from "./components/Joke"
import React from 'react';



test('Trying the classic chicken joke', () => {
  render(<Joke name="chicken" />);
  expect(screen.getByText(/why did the chicken cross the road?/i)).toBeInTheDocument();
});

test('Trying to check what it prints when I give no input', () => {
  render(<Joke />);
  expect(screen.getByText(/why did the cross the road?/i)).toBeInTheDocument();
});

test("Trying to render something that doesn't fit", () => {
  render(<Joke name="10"/>);
  expect(screen.getByText(/why did the 10 cross the road?/i)).toBeInTheDocument();
});

