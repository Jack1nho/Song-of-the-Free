import React, {Component} from 'react';
import './Header.css';
import Logo from '../../../images/tattoolama-logo.png';
import Logo2 from '../../../images/lama-logo.png';
import Bars from '../../../images/bars-solid.svg';
import Close from '../../../images/times-solid.svg';



class Header extends Component {

    constructor(props) {
        super(props);
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }

    openNav() {
        document.getElementById("myNav").style.height = "100%";
    }
      
    closeNav() {
        document.getElementById("myNav").style.height = "0%";
    }
    
    render(){
        return(
            <div>
                <nav className="container navbar navbar-expand-md">
                    <a className="navbar-brand" href="index.html">
                        <img src={Logo} alt=""/>
                    </a>
                    
                    <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active p-1">
                        <a className="nav-link" href="list_tattooer.html">Tatuatori <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item p-1">
                        <a className="nav-link" href="list_design.html">Tattoo Design</a>
                        </li>
                        <li className="nav-item p-1 pr-5">
                        <a className="nav-link" href="">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Contattaci 🦄</a>
                        </li>
                    </ul>
                    </div>
                </nav>

                <nav className="nav-res">
                    <div id="myNav" className="overlay">
                            <a className="closebtn" onClick={this.closeNav}><img src={Close} alt=""/></a>
                            <div className="overlay-content">
                                <a href="list_tattooer.html">Tatuatori</a>
                                <a href="list_design.html">Tattoo Design</a>
                                <a href="">Blog<br></br><br></br></a>
                                <a href="">Contattaci 🦄</a>
                            </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="botton-res p-3" onClick={this.openNav}><img src={Bars} aria-hidden="true" alt=""/></div>
                        
                        <a className="navbar-brand-res" href="index.html">
                            <img className="img-res mx-auto p-1" src={Logo2} alt=""/>
                        </a>
                        <div className="p-3"></div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;