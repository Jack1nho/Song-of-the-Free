import React, {Component} from 'react';

class DesignTattooer extends Component {
    
    render(){
        return(
            <div className="tattooer">
                    <div className="row">
                        <div className="col-12 col-md-8 my-2">
                            <div className="text-3">Tatuatore: <span className="grey">Gianmaurizio Fercioni</span></div>
                            <div className="col-12 d-md-none pl-0 my-3">
                                <img src="https://via.placeholder.com/221x157" className="img-artist" alt="" />
                            </div>
                            <div className="normal-text mt-2">Ha aperto a Milano il suo tattoo studio (aprendo al pubblico  anche  la sua collezione storica e antropologica) 
                                uno dei primi  in Italia  e tuttora uno dei più qualificati; il  suo "Queequeg Tattoo Studio &amp; Museo" in zona Brera. 
                                Punto di riferimento molto importante per chi si interessa di tatuaggio ed è conosciuto in Europa e nel resto del mondo.</div>
                        </div>
                        <div className="col-12 col-md-4 d-none d-md-block">
                            <img src="https://via.placeholder.com/221x157" className="img-artist float-md-right float-left" alt="" />
                        </div>
                    </div>
                </div>
        );
    }
}

export default DesignTattooer;