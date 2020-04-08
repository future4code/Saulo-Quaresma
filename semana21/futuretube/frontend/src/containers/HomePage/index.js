import React, { Component } from 'react';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer';
import VideoCards from '../../components/VideoCards/index';

class HomePage extends Component {
   render() {
      return (
         <main className="main">
            <Header />

            <VideoCards/>

            <Footer />
         </main>
      )
   }
}

export default HomePage;