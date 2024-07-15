import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';


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

NotificationItem.PropTypes = {
    type: PropTypes.string,
    value: PropTypes.bool,
    html: PropTypes.shape({
        __html: PropTypes.string.isRequired,}),
}
// default state //
NotificationItem.PropTypes = {
    type:'default',
}
export default NotificationItem;