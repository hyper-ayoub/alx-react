
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

// notification testing here //


// here the update //
const notificationsList = [
  {id: 1, value: 'New course available', type:'default'},
  {id: 2, value: 'New resume available', type:'urgent'},
  {id: 3, html: getLatestNotification, type:'urgent'},
]


test('Notifications component renders without crashing', () => {
  render(<Notifications  displayDrawer={true} listNotifications={notificationsList} />)
  expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument()
})

test("Notifications renders ul", () => {
  render(<Notifications displayDrawer={true} listNotifications={notificationsList} />)
  expect(screen.getByRole('list')).toBeDefined();
});

test("Notifications renders three list items", () => {
  render(<Notifications displayDrawer={true} listNotifications={notificationsList} />)
  expect(screen.getAllByRole('listitem').length).toBe(3);
});

test("Notifications renders three  NotificationItem instances", () => {
  render(<Notifications displayDrawer={true} listNotifications={notificationsList} />)
  // expect(screen.getByTestId('child')).toBeInTheDocument() -> how can I access child components?
});

test('NotificationItem renders menuItem when displayDrawer is false', () => {
  render(<Notifications />)
  expect(screen.getByText('Your notifications')).toBeDefined()
})

test('NotificationItem renders menuItem when displayDrawer is true', () => {
  render(<Notifications displayDrawer={true} listNotifications={notificationsList} />)
  expect(screen.getByText('Your notifications')).toBeDefined()
})

test('Notifications renders correctly with no notificationsList passed', () => {
  render(<Notifications />)
  expect(screen.getByText('No new notifications for now')).toBeInTheDocument()
  expect(screen.queryByText('Here is the list of notifications')).not.toBeInTheDocument()
})

test('Notifications renders correctly with an empty notifications array passed', () => {
  render(<Notifications listNotifications={[]}/>)
  expect(screen.getByText('No new notifications for now')).toBeInTheDocument()
  expect(screen.queryByText('Here is the list of notifications')).not.toBeInTheDocument()
})

test('Notifications renders correctly', () => {
  render(<Notifications listNotifications={notificationsList}/>)
  expect(screen.queryByText('No new notifications for now')).not.toBeInTheDocument()
  expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument()
})