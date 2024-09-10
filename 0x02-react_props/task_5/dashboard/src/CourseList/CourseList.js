// CourseList.js
import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape'; // Assuming CourseShape is defined correctly in CourseShape.js

export default function CourseList ({ listCourses }) {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          // Display message when there are no courses available
          <CourseListRow textFirstCell="No course available yet" isHeader={false} />
        ) : (
          // Map through courses and render rows for each course
          listCourses.map((course) => (
            <CourseListRow
              key={course.id} // Provide a unique key for each course
              textFirstCell={course.name}
              textSecondCell={String(course.credit)} // Ensure credits are shown as strings
              isHeader={false}
            />
          ))
        )}
      </tbody>
    </table>
  );
};
// Set default props
CourseList.defaultProps = {
  listCourses: [], // Default to an empty array if not provided
};


// Define PropTypes for the component using CourseShape
CourseList.PropTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
};



