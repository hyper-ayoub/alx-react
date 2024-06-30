import React from 'react';
import logo from './logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';
import Notifications from './Notifications';
// import here //


export default function App() {
  const isIndex = true;
  return (
    <div >
      <Notifications />   {/* notification function */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Holberton logo" />
        <h1>School dashboard</h1> {/* divider  */}
      </header>
      <div class="divider"> </div>

      <div > {/* login here  */}
        <body className="App-body">
          <p>Login to access the full dashboard</p>
          <label htmlFor="Email">Email:&nbsp;&nbsp;</label>
          <input type="text" id="Email" />
          &nbsp;&nbsp;&nbsp;
          <label htmlFor="Password">Password:&nbsp;&nbsp;</label>
          <input type="password" id="Password"></input>     &nbsp;&nbsp;<button type="submit">OK</button>
          <div>
          </div>
        </body>
      </div>
      <div>
        {/* footer  */}
        <footer className="App-footer">
          <div class="divider"> </div>    {/* divider  */}
          <p>Current Year: {getFullYear()}</p>
          <p>Footer Copy: {getFooterCopy(true)}</p>
          <p>Copyright 2020 - holberton School</p>

        </footer>
      </div>
    </div>

  );
}

