import React from 'react';
import logo from './logo.jpg';
import './App.css';


export default function App() {
  return (
    <div >
      <header className="App-header">
    
     <img src={logo} className="App-logo" alt="Holberton logo" />
     <h1>School dashboard</h1>
    </header>
    
    <div class="divider"> </div>

      <div >
       <body className="App-body">
    <p>Login to access the full dashboard</p>
       </body>
      </div>

      <div>
        <footer className="App-footer">
        <div class="divider"> </div>
            <p>Copyright 2020 - holberton School</p>
        </footer>
      </div>
    </div>

  );
}

