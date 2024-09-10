import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from "../utils/utils";
// import all files => app.js//
// delete content component and add the function items //
//Add the new Notifications component before the div.App element//
// move teh content of  every component to the exact folder //
// All Good🧠//

function App({isLoggedIn}) {
  // array of listcourses //
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];
  // array of listNotifications//
  const listNotifications = [
    {id: 1, type: 'default', value: 'New course available'},
    {id: 2, type: 'urgent', value: 'New resume available'},
    {id: 3, type: 'urgent', html: getLatestNotification() }
  ]

  return (
    <>
     {/*notification user*/}
     <Notifications listNotifications={listNotifications}/>
      <Header />
      {/* login system */}
      {/* if login => Courselist else: pls login*/}
      {/* array of listcourses */}
      {isLoggedIn ? <CourseList listCourses={listCourses}/> :<Login/>}
      <Footer />
    </>
  );
}
//Create a property isLoggedIn. It should be false by default//
App.defaultProps = {
  isLoggedIn: false,
}
// boll //
App.propTypes = {
  isLoggedIn: PropTypes.bool,
};
export default App;