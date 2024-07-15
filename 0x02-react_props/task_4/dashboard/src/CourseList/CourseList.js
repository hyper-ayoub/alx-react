import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow'; // Assuming CourseListRow component is defined in CourseListRow.js

const CourseList = () => {
    return (
        <table id='CourseList'>
            <thead>
                <CourseListRow textFirstCell="Available courses" isHeader={true} />
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </thead>
            <tbody >
                <CourseListRow textFirstCell="ES6" textSecondCell="60" isHeader={false} />
                <CourseListRow textFirstCell="Webpack" textSecondCell="20" isHeader={false} />
                <CourseListRow textFirstCell="React"  textSecondCell="40"isHeader={false} />
            </tbody>
        </table>
    );
};

CourseList.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string,
};

export default CourseList;
