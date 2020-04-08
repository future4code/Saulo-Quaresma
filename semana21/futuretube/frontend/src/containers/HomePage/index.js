import React, { Component } from 'react';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer';

class HomePage extends Component {
   render() {
      return (
         <main className="main">
            <Header />
            <Footer />
         </main>
      )
   }
}

export default HomePage;