import React, {Component} from 'react';
import './Footer.css';
import Logo from '../../../images/lama-logo.png';
import { Link } from 'react-router-dom';

class Footer extends Component {
    
    render(){
        return(
            <div>
                <div className="container-fluid footer">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <img src={Logo} alt=""/>
                                <h4 className="text-footer-1">TattooLama è il primo portale Italiano che ti permette di trovare
                                facilmente il tatuaggio, tatuatore o studio che fa al tuo caso. Con
                                TattooLama è facile trovare i migliori tatuatori della tua città per
                                chiedere il preventivo per il tuo tatuaggio.
                                </h4>
                            </div>
                            <div className="col d-none d-md-block">
                                <h4 className="text-footer-2">RISORSE</h4>  
                                <Link to='/' className="text-footer-2" href="">Studi Tatuaggi Milano</Link><br></br>
                                <Link to='/' className="text-footer-2" href="">Tatuatori Milano</Link><br></br>
                                <Link to='/' className="text-footer-2" href="">Blog</Link><br></br>
                                <Link to='/' className="text-footer-2" href="">Mappa del Sito Tattoolama</Link><br></br>
                                <Link to='/' className="text-footer-2" href="">Privacy &amp; Cookie Policy</Link><br></br>
                            </div>
                        </div>       
                    </div>
                </div>
                <div className="footer-2 container-fluid">
                    <div className="container">
                        <h1 className="Copyright m-0">Copyright TattooLama © 2019. Tutti i Diritti Riservati</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;