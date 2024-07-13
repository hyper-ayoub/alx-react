import React from 'react';
import './Notifications.css';


const NotificationItem = ({ type, html, value }) => {
    return (
        <>
            {type && value ? <li data-notification-type={type}>{value}</li> : null}
            {html ? (
                <li data-urgent dangerouslySetInnerHTML={{ __html: html }}></li>
            ) : null}
        </>
    );
};
export default NotificationItem;