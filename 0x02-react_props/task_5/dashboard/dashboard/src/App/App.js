import React from 'react';
import css from './App.css';
import { useState } from 'react' // add this //
import PropTypes from "prop-types";
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import '../CourseList/CourseList.css'
import { getLatestNotification } from '../utils/utils';

// import all files => app.js//
// delete content component and add the function items //
//Add the new Notifications component before the div.App element//
// move teh content of  every component to the exact folder //
// All Good🧠//
// add the prop-type && statement and statement of  => isLoggedIn //

// array here //

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 }
]

// array here//
const notificationsList = [
  { id: 1, value: 'New course available', type: 'default' },
  { id: 2, value: 'New resume available', type: 'urgent' },
  { id: 3, html: getLatestNotification, type: 'urgent' },
]

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <>
      {/* {notificationsList.length > 0 ? (
     <Notifications listNotifications={notificationsList} />):(<Notifications listNotifications={[]} />)} */}
      <Notifications />
      <Header />
      <div className='MyApp'>{isLoggedIn ? <CourseList /> : <Login />}
      </div>

      <Footer />
    </>
  );

}
App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};