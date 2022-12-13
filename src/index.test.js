import React from 'react';
import { render } from '@testing-library/react';
import Index from './App';

test('render index', () => {
  const LayoutComponent = render(<Index />);
  const childElement = LayoutComponent.getByRole('textbox');
  expect(childElement).toBeInTheDocument();
});
