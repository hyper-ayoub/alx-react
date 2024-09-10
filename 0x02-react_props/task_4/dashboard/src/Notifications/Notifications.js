import React from 'react';
import  css from './Notifications.css'
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import closeIcon from '../close-icon.png';
import PropTypes from 'prop-types';
// no change //
// all good 🎓//
export default function Notifications({displayDrawer}) {
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
        <NotificationItem type='default' value='New course available' />
        <NotificationItem type='urgent' value='New resume available' />
        <NotificationItem type='urgent' html={getLatestNotification()} />
      </ul>
    </div>
     )}
    </>
  );
}
//  prop //
Notifications.defaultProps = {
  displayDrawer: false
}
// boll //
Notifications.propTypes = {
  displayDrawer: PropTypes.boll,
}