import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
// import all files => app.js//
// delete content component and add the function items //
//Add the new Notifications component before the div.App element//
// move teh content of  every component to the exact folder //
// All Good🧠//

function App({isLoggedIn}) {
  return (
    <>
     {/*notification user*/}
     <Notifications/>
      <Header />
      {/* login system */}
      {/* if login => Courselist else: pls login*/}
      {isLoggedIn ? <CourseList/>:<Login/>}

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