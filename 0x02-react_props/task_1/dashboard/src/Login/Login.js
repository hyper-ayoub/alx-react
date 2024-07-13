import React from 'react';
import './login.css';
{/* login here  */}
// login function //
// import here for login //
// login css //
// login component Done 🎓//

export default function Login() {
  return(
    <>
    <body className="App-body" data-testid="app-body">
          <p>Login to access the full dashboard</p>
          <label htmlFor="Email">Email:&nbsp;&nbsp;</label>
          <input type="text" id="Email" />
          &nbsp;&nbsp;&nbsp;
          <label htmlFor="Password">Password:&nbsp;&nbsp;</label>
          <input type="password" id="Password"></input>     &nbsp;&nbsp;<button type="submit">OK</button>
          <div>
          </div>
        </body>
    </>
  )
}