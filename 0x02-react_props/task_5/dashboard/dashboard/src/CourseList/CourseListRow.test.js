// CourseListRow.test.js
import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('<CourseListRow />', () => {
    describe('When isHeader is true', () => {
        it('renders one cell with colspan = 2 when textSecondCell does not exist', () => {
            const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header Cell" />);
            const thElement = wrapper.find('th');
            expect(thElement).toHaveLength(1); // Check there is exactly one th element
            expect(thElement.prop('colSpan')).toBe('2'); // Check colspan attribute
            expect(thElement.text()).toBe('Header Cell'); // Check content
        });

        it('renders two cells when textSecondCell is present', () => {
            const wrapper = shallow(
                <CourseListRow isHeader={true} textFirstCell="Header Cell 1" textSecondCell="Header Cell 2" />
            );
            const thElements = wrapper.find('th');
            expect(thElements).toHaveLength(2); // Check there are exactly two th elements
            expect(thElements.at(0).text()).toBe('Header Cell 1'); // Check first cell content
            expect(thElements.at(1).text()).toBe('Header Cell 2'); // Check second cell content
        });
    });

    describe('When isHeader is false', () => {
        it('renders correctly two td elements within a tr element', () => {
            const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Data Cell 1" textSecondCell="Data Cell 2" />);
            const tdElements = wrapper.find('td');
            expect(tdElements).toHaveLength(2); // Check there are exactly two td elements
            expect(tdElements.at(0).text()).toBe('Data Cell 1'); // Check first cell content
            expect(tdElements.at(1).text()).toBe('Data Cell 2'); // Check second cell content
        });
    });
});
