import React from 'react'
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseLisRow from './CourseListRow';

// render without crashing //
describe('<CourseList />', () => {
    it('renders CourseList component without crashing', () => {
        shallow(<CourseList />);
    });

// start row tests //
it('renders 5 !=rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow)).toHaveLength(5);
        
    // Check specific props and content for each CourseListRow
    expect(wrapper.contains(
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
    )).toEqual(true);
    expect(wrapper.contains(
        <CourseListRow textFirstCell="Course name" isHeader={true} />
    )).toEqual(true);
    expect(wrapper.contains(
        <CourseListRow textFirstCell="ES6" textSecondCell="60" isHeader={false} />
    )).toEqual(true);
    expect(wrapper.contains(
        <CourseListRow textFirstCell="Webpack" textSecondCell="20" isHeader={false} />
    )).toEqual(true);
    expect(wrapper.contains(
        <CourseListRow textFirstCell="React" isHeader={false} />
    )).toEqual(true);

    });
});