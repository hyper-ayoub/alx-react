import React from 'react';
import PropTypes from 'prop-types';
import CourseShape from 'CourseShape';

// all imported here //
// start with creating array of CourseShape //

const CourseShape = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    credit: PropTypes.number.isRequired,
  };

  export default CourseShape;