
import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';

const Notifications = ({ displayDrawer = true, listNotifications = [] }) => {
  const log = () => console.log('Close button has been clicked');
  const style = {
    position: 'absolute',
    right: '.25rem',
    top: '.25rem',
    background: 'transparent',
    border: 'none',
  };

  return (
    <>
      <div className="menuItem">
        <p>Your notifications</p>
      </div>
      {displayDrawer && (
        <div className="Notifications" style={{ position: 'relative' }}>
          {listNotifications.length > 0 ? (
            <>
              <p>Here is the list of notifications</p>
              <ul>
                {listNotifications.map((item) => (
                  <NotificationItem
                    key={item.id}
                    type={item.type}
                    value={item.value}
                    html={item.html}
                  />
                ))}
              </ul>
              <button aria-label="Close" onClick={log} style={style}>
                x
              </button>
            </>
          ) : (
            <p>No new notifications for now</p>
          )}
        </div>
      )}
    </>
  );
};

export default Notifications;
