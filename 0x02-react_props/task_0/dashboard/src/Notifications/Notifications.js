import React from 'react';
import './Notifications.css'
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../close-icon.png';
// no change //
// all good 🎓//
export default function Notifications() {
  return (
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
        <li
          style=
          {{
            color: 'blue',
          }}
        >New course available</li>
        <li
        >New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  )
}