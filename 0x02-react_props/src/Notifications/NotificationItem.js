import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';
// Create a new component named NotificationItem: //

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

//Verify that html is an object with the key __html, and that the value is a string //
//Require type to be a defined prop and a string. It should default to default if type is not passed by the parent component//
//Verify that value is a string//

NotificationItem.Prototypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string.isRequired
    }),
}
NotificationItem.Prototypes = {
    type: 'default',
}
export default NotificationItem;