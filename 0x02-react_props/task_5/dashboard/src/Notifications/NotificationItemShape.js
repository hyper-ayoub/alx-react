import React from 'react';
import PropTypes from 'prop-types';

const NotificationItemShape = {
    id : PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    html: PropTypes.shape({
        html: PropTypes.string.isRequired
    })
} 
export default NotificationItemShape;