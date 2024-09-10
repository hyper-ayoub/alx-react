// CourseListRow.js
import React from 'react';
import PropTypes from 'prop-types';
import './CourseList.css'; 

const CourseListRow = ({ isHeader = false, textFirstCell, textSecondCell = null }) => {
    if (isHeader) {
        if (textSecondCell === null) {
            return (
                <tr>
                    <th colSpan={2}>{textFirstCell}</th>
                </tr>
            );
        } else {
            return (
                <tr>
                    <th>{textFirstCell}</th>
                    <th>{textSecondCell}</th>
                </tr>
            );
        }
    } else {
        return (
            <tr>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </tr>
        );
    }
};
//modification textSecondCell: PropTypes.string || PropTypes.number,//
CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

};

export default CourseListRow;
