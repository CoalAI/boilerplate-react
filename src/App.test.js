import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {}
    };
  };
test('renders App', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

test('render Layout', () => {
  const LayoutComponent = render(<App />);
  const childElement = LayoutComponent.getByRole('textbox');
  expect(childElement).toBeInTheDocument();
});
