import React, {Component} from 'react';
import './Header.css';
import Logo from '../../../images/tattoolama-logo.png';
import Logo2 from '../../../images/lama-logo.png';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
library.add(faTimes)
library.add(faBars)




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
                
                     <Link className="navbar-brand" to='/'><img src={Logo} alt=""/></Link>
                    
                    <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active p-1">
                            <Link className="nav-link" to='/tatuatori'>Tatuatori <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item p-1">
                            <Link className="nav-link" to='/tatuaggi'>Tattoo Design</Link>
                        </li>
                        <li className="nav-item p-1 pr-5">
                            <Link className="nav-link" to='/blog'>Blog</Link>
                        </li>
                        <li className="nav-item p-1">
                            <Link className="nav-link" to='/Contacts'>Contattaci <span role="img" aria-label="emoji">🦄</span></Link>
                        </li>
                    </ul>
                    </div>
                </nav>

                <nav className="nav-res">
                    <div id="myNav" className="overlay">
                            <FontAwesomeIcon className="closebtn" onClick={this.closeNav} icon="times" />
                            <div className="overlay-content">
                                <Link to='/' onClick={this.closeNav}>Home</Link>
                                <Link to='/tatuatori' onClick={this.closeNav}>Tatuatori</Link>
                                <Link to='/tatuaggi' onClick={this.closeNav}>Tattoo Design</Link>
                                <Link to='/Blog' onClick={this.closeNav}>Blog</Link>
                                <Link className="mt-5" to='/Contacts' onClick={this.closeNav}>Contattaci <span role="img" aria-label="emoji">🦄</span></Link>
                            </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="botton-res my-2 mx-3" onClick={this.openNav} style={{color:'white'}}><FontAwesomeIcon icon="bars" aria-hidden="true"/></div>
                        
                            <Link className="navbar-brand-res" to='/'><img className="img-res mx-auto p-1" src={Logo2} alt=""/></Link>
                        
                        <div className="p-3"></div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;