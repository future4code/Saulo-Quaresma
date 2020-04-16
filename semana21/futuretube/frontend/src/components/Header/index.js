import React, { Component } from 'react';
import Logo from '../../logo.png';
import "../../style/header.css";

class Header extends Component {
   render() {
      return (
         <main className="main">
            <header className="header">
               <div className="img-container">
                  <img src={Logo} alt="logo" />
               </div>
            </header>
            <div className="buttons-container">
               <button className="button">Home</button>
               <button className="button">Gallery</button>
               <button className="button">Search</button>
               <button className="button">Logout</button>
            </div>

         </main>
      )
   };
};

export default Header;