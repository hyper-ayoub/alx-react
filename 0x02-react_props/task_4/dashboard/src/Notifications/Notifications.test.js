
 import React from 'react';
 import { render} from '@testing-library/react';
 import Notifications from './Notifications';


 
test('renders Notifications component without crashing', () => {
  render(<Notifications />);
});

test('Notifications renders three list items', () => {
  const { getAllByRole } = render(<Notifications />);
  const listItems = getAllByRole('list_item');
  expect(listItems.length).toBe(3); // Assuming Notifications renders three list items
});

test('Notifications renders the text "Here is the list of notifications"', () => {
  const { getByText } = render(<Notifications />);
  const textElement = getByText('Here is the list of notifications');
  expect(textElement).toBeInTheDocument();
});
