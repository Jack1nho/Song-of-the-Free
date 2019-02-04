import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
library.add(faStar)

class Bio extends Component {
    
    render(){
        return(
            <div>
                <div className="row row-artist">
                    <div className="col-12 col-lg">
                        <img src="https://via.placeholder.com/240x171" className="img-artist" alt=""/>
                    </div>
                    <div className="col-12 col-lg col-name">
                        <h1 className="nome">GIANMAURIZIO</h1>
                        <h1 className="cognome">FERCIONI</h1>
                        <span className="badge top-artist"><FontAwesomeIcon icon="star"/>&nbsp;&nbsp;&nbsp;TOP ARTIST</span>
                    </div>   
                </div>

                <div className="biografia" id="biografia">
                    <h2 className="text-3 my-4"> Biografia Tatuatore</h2>
                    <h2 className="normal-text">Gian Maurizio Fercioni è nato a Milano nel 1946, frequenta il Liceo 
                        Artistico di Brera e il Corso di Scenografia presso l'Accademia di Belle Arti di Brera dove si diploma nel 1970.  
                        Debutta al teatro della Scala di Milano e da allora ha lavorato  come scenografo e costumista per 
                        i più importanti teatri dell’Opera d’Europa e per molti films. <br></br><br></br>
                        Ha aperto a Milano il suo tattoo studio (aprendo al pubblico  anche  la sua collezione storica e antropologica) 
                        uno dei primi  in Italia  e tuttora uno dei più qualificati; il  suo "Queequeg Tattoo Studio &amp; Museo" in zona Brera. 
                        Punto di riferimento molto importante per chi si interessa di tatuaggio ed è conosciuto in Europa e nel resto del mondo.</h2>
                </div>         
            </div>
        );
    }
}

export default Bio;