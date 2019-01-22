import React, {Component} from 'react';
import './Footer.css';
import Logo from '../../../images/lama-logo.png';

class Footer extends Component {
    
    render(){
        return(
            <div>
                <div className="container-fluid footer">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <img src={Logo} alt=""/>
                                <h4 className="text-footer-1">TattooLama è il primo protale Italiano che ti permette di trovare
                                facilmente il tatuaggio, tatuatore o studio che fa al tuo caso. Con
                                TattooLama è facile trovare i migliori tatuatori della tua città per
                                chiedere il preventivo per il tuo tatuaggio.
                                </h4>
                            </div>
                            <div className="col d-none d-md-block">
                                <h4 className="text-footer-2">RISORSE</h4>  
                                <a className="text-footer-2" href="">Studi Tatuaggi Milano</a><br></br>
                                <a className="text-footer-2" href="">Tatuatori Milano</a><br></br>
                                <a className="text-footer-2" href="">Blog</a><br></br>
                                <a className="text-footer-2" href="">Mappa del Sito Tattoolama</a><br></br>
                                <a className="text-footer-2" href="">Privacy &amp; Cookie Policy</a><br></br>
                            </div>
                        </div>       
                    </div>
                </div>
                <div className="footer-2 container-fluid">
                    <div className="container">
                        <h1 className="Copyright m-0">Copyright TattooLama © 2018. Tutti i Diritti Riservati</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;