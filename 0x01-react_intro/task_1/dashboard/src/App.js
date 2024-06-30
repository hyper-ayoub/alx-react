import React from 'react';
import logo from './logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';
import Notifications from './Notifications';


export default function App() {
  const isIndex = true;
  return (
    <div >
      <Notifications/>
      <header className="App-header">
    
     <img src={logo} className="App-logo" alt="Holberton logo" />
     <h1>School dashboard</h1>
    </header>
    
    <div class="divider"> </div>

      <div >
       <body className="App-body">
      <p>Login to access the full dashboard</p>
     
      
     
      <div>
      </div>


    
   
       </body>
      </div>

      <div>
        <footer className="App-footer">
        <div class="divider"> </div>
            <p>Current Year: {getFullYear()}</p>
            <p>Footer Copy: {getFooterCopy(true)}</p>
            <p>Copyright 2020 - holberton School</p>

        </footer>
      </div>
    </div>

  );
}

