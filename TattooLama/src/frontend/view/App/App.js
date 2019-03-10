import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../App/Main';
import '../App/slick/slick-theme.css';
import '../App/slick/slick.css';

class App extends Component {

  render() {
    return (
      <div className="wrapper">
        <Header></Header>   
        <Main></Main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
