// create four tests://
// App.test.js //
// make sure to import render && act && @testing-library/jest-dom/extend-expect //

import React from 'react';
import { render} from '@testing-library/react';
import '@testing-library/react';
import App from './App';
import { act } from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList'; 
import Login from './Login';



test('renders App component without crashing', () => {
  render(<App />);
});

test('App renders a div with the class App-header', () => {
  const { getByTestId } = render(<App />);
  const appHeader = getByTestId('app-header');
  expect(appHeader).toBeInTheDocument();
});

test('App renders a div with the class App-body', () => {
  const { getByTestId } = render(<App />);
  const appBody = getByTestId('app-body');
  expect(appBody).toBeInTheDocument();
});

test('App renders a div with the class App-footer', () => {
  const { getByTestId } = render(<App />);
  const appFooter = getByTestId('app-footer');
  expect(appFooter).toBeInTheDocument();
});

describe('<App />', () => {
    it('contains the Notifications component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists('Notifications')).toBe(true);
    });

    it('contains the Header component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists('Header')).toBe(true);
    });

    it('contains the Login component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists('Login')).toBe(true);
    });

    it('contains the Footer component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists('Footer')).toBe(true);
    });
});
// App test suite //
describe('CourseList Component', () => {
  test('CourseList is not displayed when isLoggedIn is false', () => {
    render(<CourseList isLoggedIn={false} />);
    const courseList = screen.queryByTestId('course-list');
    expect(courseList).not.toBeInTheDocument();
  });

  test('when isLoggedIn is true, Login component is not included and CourseList component is included', () => {
    render(<CourseList isLoggedIn={true} />);
    
    // Check that the Login component is not included
    const loginComponent = screen.queryByTestId('login-component');
    expect(loginComponent).not.toBeInTheDocument();

    // Check that the CourseList component is included
    const courseList = screen.getByTestId('course-list');
    expect(courseList).toBeInTheDocument();
  });
});
