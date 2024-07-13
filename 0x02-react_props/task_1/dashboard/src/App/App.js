import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';

// import all files => app.js//
// delete content component and add the function items //
//Add the new Notifications component before the div.App element//
// move teh content of  every component to the exact folder //
// All Good🧠//

function App() {
  return (
    <>
      <Notifications />
      <Header />
      <Login />
      <Footer />
    </>
  );
}

export default App;