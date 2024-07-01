// create four tests://
// App.test.js //
// make sure to import render && act && @testing-library/jest-dom/extend-expect //

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import { act } from 'react';

test('renders App component without crashing', () => {
  render(<App />);
});

test('App renders a div with the class App-header', () => {
  const { getByTestId } = render(<App />);
  const appHeader = getByTestId('app-header');
  expect(appHeader).toBeInTheDocument();
});

test('App renders a div with the class App-body', () => {
  const { getByTestId } = render(<App />);
  const appBody = getByTestId('app-body');
  expect(appBody).toBeInTheDocument();
});

test('App renders a div with the class App-footer', () => {
  const { getByTestId } = render(<App />);
  const appFooter = getByTestId('app-footer');
  expect(appFooter).toBeInTheDocument();
});
