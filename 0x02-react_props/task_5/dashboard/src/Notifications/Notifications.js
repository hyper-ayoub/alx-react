import React from 'react';
import './Notifications.css'
import NotificationItem from './NotificationItem';
import closeIcon from '../close-icon.png';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { getLatestNotification } from '../utils/utils';
// no change //
// all good 🎓//
export default function Notifications({displayDrawer, listNotifications }) {
  return (
    <>
    {/* menu item*/}
      <div className='menuItem'>Your notifications</div>
     {/* Notifications*/}
     {/*displayDrawer*/}
     {displayDrawer  && (
    <div className="Notifications">
      <button arial-lable='Close' onClick={() => console.log('close button has been clicked')}
        style={{
          background: 'none',
          border: 'none',
          position: 'absolute',
          right: '16px',
          cursor: 'pointer',
        }}
      >
        <img src={closeIcon} alt="close icon"
          style={{
            fontSize: '13px',
            with: '30px',
            height: '30px',

          }}
        />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
      {listNotifications.length === 0 ? (<NotificationItem value="No new notification for now" type='no-new' />) : <></>}
      {listNotifications.map((Notification) => (<NotificationItem key={ Notification.id } type={ Notification.type } value={ Notification.value } html={ Notification.html } />))}
      </ul>
    </div>
     )}
    </>
  );
}
NotificationItem.Prototypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
}
//  prop //
Notifications.defaultProps = {
  displayDrawer: false
}
// boll //
Notifications.propTypes = {
  displayDrawer: PropTypes.boll,
}