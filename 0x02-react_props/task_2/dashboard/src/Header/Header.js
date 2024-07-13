import React from 'react';
import logo from '../logo.jpg';
import './Header.css';
// import { getFullYear, getFooterCopy } from './utils';
// import Notifications from './Notifications';
// import here //
// Header function //
// import here for Header //
// Header css //
// Header component Done 🎓//

export default function Header() {
  return (
    <>
      <header className="App-header" data-testid="app-header">
        <img src={logo} className="App-logo" alt="Holberton logo" />
        <h1>School dashboard</h1> {/* divider  */}
      </header>
      <div className="divider"> </div>
    </>

  );
}
