import React from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
// import Notifications from './Notifications';
// import here for Header //
// footer function //
// import here for footer //
// footer footer //
// footer component Done 🎓//

 {/* footer  */}
export default function Footer(){
return(
    <>
     <footer className="App-footer" data-testid="app-footer">
        <div className="divider"> </div>    {/* divider  */}
          <p>Current Year: {getFullYear()}</p>
         <p>Footer Copy: {getFooterCopy(true)}</p>
           <p>Copyright 2020 - holberton School</p>
       </footer>
    
    
    </> 
)}