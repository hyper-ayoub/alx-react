import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow'; // Assuming CourseListRow component is defined in CourseListRow.js

const CourseList = ({ listCourses })  => {
    if (listCourses.length === 0) {
        return (
        <table>
            <thead>
            <div className="no-courses">No course available yet</div>
            </thead>
            <tbody>
             <CourseListRow/>
                <CourseListRow/>
                <CourseListRow/>
            </tbody>

        </table>
        );

      } else{
    return (
        <table id='CourseList'>
            <thead>
                <CourseListRow textFirstCell="Available courses" isHeader={true} />
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </thead>
            <tbody >
            {
                listCourses.map((course) => <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} />)
              }

            </tbody>
        </table>
    );
};
}

CourseList.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string,
};

// array here //
CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      Credit: PropTypes.number.isRequired,
    })
  ),
};
// default here //
CourseList.defaultProps = {
    listCourses: [], 
};



export default CourseList;
