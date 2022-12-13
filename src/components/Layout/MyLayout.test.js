import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MyLayout from './MyLayout';

// eslint-disable-next-line no-use-before-define
test('renders MyLayout', () => {
  render(<MyLayout />);

  const childElement1 = screen.getByRole('banner');
  expect(childElement1).toBeInTheDocument();
  const childElement2 = screen.getAllByRole('menu');
  expect(childElement2).toHaveLength(2);
  const childElement3 = screen.getAllByRole('menuitem');
  expect(childElement3).toHaveLength(10);
  const childElement4 = screen.getAllByRole('button');
  expect(childElement4).toHaveLength(1);
});
