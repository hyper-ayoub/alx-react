import React from 'react';
import './App.css';
import PropTypes from "prop-types";
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList'; 
import '../CourseList/CourseList.css'

// import all files => app.js//
// delete content component and add the function items //
//Add the new Notifications component before the div.App element//
// move teh content of  every component to the exact folder //
// All Good🧠//
// add the prop-type && statement and statement of  => isLoggedIn //


export default function App({isLoggedIn}) {
  return (
    
    <>
      <Notifications />
      <Header />
      <div className='MyApp'>
      {isLoggedIn ? <CourseList /> : <Login />}
      </div>
      <Login />
      <Footer />
    </>
  );
  
}
App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};
