// create four tests://
// App.test.js //
// make sure to import render && act && @testing-library/jest-dom/extend-expect //

import React from 'react';
import { render} from '@testing-library/react';
import '@testing-library/react';
import App from './App';
import { act } from 'react';
import { shallow } from 'enzyme';

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
cle