import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MyButton from './MyButton';

test('renders MyButton', () => {
  render(<MyButton />);

  const childElement1 = screen.getByRole('button');
  expect(childElement1).toBeInTheDocument();
});
