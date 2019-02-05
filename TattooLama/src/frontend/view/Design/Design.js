import React, {Component} from 'react';
import './designStyle.css';

class Design extends Component {
    
    render(){
        return(
            <div className="design my-4">
                    <div className="row">
                        <div className="col-12 col-md text-md-right text-center">
                                <img src="https://via.placeholder.com/238x362" className="img-design" alt=""/>
                        </div>
                        <div className="col-12 col-md">
                            <h2 className="text-3 mt-md-auto mt-5">Persian Cat</h2>
                                <div className="row">
                                    <div className="col-6 col-md-12">
                                    <h3 className="description float-md-none float-left"><strong>Tattoo Artist:<br></br></strong> Gianmaurizio Fercioni</h3>
                                </div>
                                <div className="col-6 col-md-12">
                                    <h3 className="description"><strong>Città dello studio:<br></br></strong> Milano</h3>
                                    <h3 className="description d-none d-md-block"><strong>Dimensione:</strong> 10x15 cm</h3>
                                </div>
                            </div>
                            <h3 className="description mt-4"><strong>Stili:</strong></h3>
                            <h3 className="description float-md-none float-left"><span className="Red">#</span>realistico&nbsp;</h3>
                            <h3 className="description float-md-none float-left"><span className="Red">#</span>blackwork&nbsp;</h3>
                            <h3 className="description float-md-none float-left"><span className="Red">#</span>animal&nbsp;</h3>
                            <h3 className="description float-md-none float-left"><span className="Red">#</span>newschool</h3>
                            
                            <div className="row div-prezzo mt-5">
                                <div className="col-6 col-md-12"><h2 className="text-3 prezzo mt-2 ml-md-auto ml-3"><span className="grey">Prezzo: </span>€ 450,00</h2></div>
                                <div className="col-6 col-md-12 container-fluid"><button type="button" className="btn bottone-richiesta mt-0" id="bottone-richiesta" data-toggle="modal" data-target="#myModalEmail">Invia richiesta</button></div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Design;