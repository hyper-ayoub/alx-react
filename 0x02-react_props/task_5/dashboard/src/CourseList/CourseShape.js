import React from 'react';
import PropTypes from 'prop-types';

//Create a new Shape named CourseShape containing://
const CourseShape = {
    id :PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    credit:PropTypes.number.isRequired,
}
export default CourseShape;