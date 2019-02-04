import React from 'react';
import './tattooerStyle.css';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import Bio from '../Tattooer/Bio';
import Design from '../Tattooer/Tattooer_design';
import Portfolio from '../Tattooer/Portfolio';
import Studio from '../Tattooer/Tattoo_studio';
library.add(faAngleLeft)

const Tattooer = () => (
    
    <div>
        <div className="jumbotron jumbotron-fluid Jumbotron-1"></div> 

        <Link className="text-back" to='/list_tatuatori'><span className="Red"><FontAwesomeIcon icon="angle-left"/></span>&nbsp;&nbsp;Guarda tutti i tatuatori</Link>

            <div className="container-wrapper">
                <div className="row main-row">
                    <div className="sidebar d-none d-md-block col-md-3 p-0">
                        <div className="sticky-menu" id="sticky-menu">
                            <nav className="side-menu">
                                <a href="#biografia"><span className="rect"></span>Biografia</a><br></br>
                                <a href="#tattoo_design"><span className="rect"></span>Tattoo Design</a><br></br>
                                <a href="#portfolio"><span className="rect"></span>Portfolio</a><br></br>
                                <a href="#tattoo_studio"><span className="rect"></span>Tattoo Studio</a><br></br>
                            </nav>
                            <button type="button" className="bottone-consulenza btn m-3">Richiedi Consulenza</button>
                        </div>
                    </div>

                    <div class="col col-lg-9 pl-md-5">
                    <Bio></Bio>
                    <Design></Design>
                    <Portfolio></Portfolio>
                    <Studio></Studio>
                    </div>
                </div>
            </div>
    </div>
    )

export default Tattooer
