import React from 'react';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape'


const NotificationItemShape = {
    id: PropTypes.number.isRequired,
    html: PropTypes.shape({
      __html: PropTypes.string.isRequired,
    }).isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  };
  
  export default NotificationItemShape;