// make sure to import render && act && @testing-library/jest-dom/extend-expect //
 import React from 'react';
 import { render } from '@testing-library/react';
 import Notifications from './Notifications';
 import { act } from 'react';
 import '@testing-library/jest-dom/extend-expect';

 
test('renders Notifications component without crashing', () => {
  render(<Notifications />);
});

test('Notifications renders three list items', () => {
  const { getAllByRole } = render(<Notifications />);
  const listItems = getAllByRole('listitem');
  expect(listItems.length).toBe(3); // Assuming Notifications renders three list items
});

test('Notifications renders the text "Here is the list of notifications"', () => {
  const { getByText } = render(<Notifications />);
  const textElement = getByText('Here is the list of notifications');
  expect(textElement).toBeInTheDocument();
});
