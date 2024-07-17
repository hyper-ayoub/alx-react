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

// here is the update //
const coursesList = [{id: 1, name: 'ES6', credit: 60},
{id: 2, name: 'Webpack', credit: 20},
{id: 3, name: 'React', credit: 40}]

// testing for courseList //
test('CourseList renders without crashing', () => {
    render(<CourseList listCourses={coursesList}/>)
    expect(Number(screen.getAllByRole('row').length) > 1).toBeTruthy()
})

test('CourseList renders 5 rows with list provided', () => {
    render(<CourseList listCourses={coursesList}/>)
    expect(Number(screen.getAllByRole('row').length)).toBe(5)
})

test('CourseList renders correctly with list not provided', () => {
    render(<CourseList listCourses={[]}/>)
    expect(Number(screen.getAllByRole('row').length)).toBe(1)
    expect(screen.getByText('No courses available yet')).toBeInTheDocument()
})