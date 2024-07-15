
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


// add here Modify the Notifications.test.js // 

describe('Notifications Component', () => {
  test('menu item is being displayed when displayDrawer is false', () => {
      render(<Notifications displayDrawer={false} />);
      const menuItem = screen.getByText('Your notifications');
      expect(menuItem).toBeInTheDocument();
  });

  test('div.Notifications is not being displayed when displayDrawer is false', () => {
      render(<Notifications displayDrawer={false} />);
      const notificationsDiv = screen.queryByText('Here is the list of notifications');
      expect(notificationsDiv).not.toBeInTheDocument();
  });

  test('menu item is being displayed when displayDrawer is true', () => {
      render(<Notifications displayDrawer={true} />);
      const menuItem = screen.getByText('Your notifications');
      expect(menuItem).toBeInTheDocument();
  });

  test('div.Notifications is being displayed when displayDrawer is true', () => {
      render(<Notifications displayDrawer={true} />);
      const notificationsDiv = screen.getByText('Here is the list of notifications');
      expect(notificationsDiv).toBeInTheDocument();
  });
});