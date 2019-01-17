import React, { Component } from 'react';
import Slider from '../home/Slider';
import GrigliaHome from '../home/GrigliaHome';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  
  
  render() {
    return (
      <div>
        <Header></Header>
        <Slider></Slider>
        <GrigliaHome></GrigliaHome>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
