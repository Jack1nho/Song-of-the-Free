import React, {Component} from 'react';
import './designStyle.css';

class DesignInfo extends Component {
    
    
    render(){
        return(
            <div className="design my-4">
                    <div className="row">
                        <div className="col-12 col-md text-md-right text-center">
                                <img src={'../' + this.props.design.image} className="img-design" alt=""/>
                        </div>
                        <div className="col-12 col-md">
                            <h2 className="text-3 mt-md-auto mt-5">{this.props.design.name_design}</h2>
                                <div className="row">
                                    <div className="col-6 col-md-12">
                                    <h3 className="description float-md-none float-left"><strong>Tattoo Artist:<br></br></strong> {this.props.tattooer.name} {this.props.tattooer.surname}</h3>
                                </div>
                                <div className="col-6 col-md-12">
                                    <h3 className="description"><strong>Città dello studio:<br></br></strong> {this.props.tattooer.city}</h3>
                                    <h3 className="description d-none d-md-block"><strong>Dimensione:</strong> {this.props.design.altezza}x{this.props.design.larghezza} cm</h3>
                                </div>
                            </div>
                            <h3 className="description mt-4"><strong>Stili:</strong></h3>
                            <h3 className="description float-md-none float-left"><span className="Red">#</span>{this.props.design.style}&nbsp;</h3>
                            <h3 className="description float-md-none float-left"><span className="Red">#</span>blackwork&nbsp;</h3>
                            <h3 className="description float-md-none float-left"><span className="Red">#</span>animal&nbsp;</h3>
                            <h3 className="description float-md-none float-left"><span className="Red">#</span>newschool</h3>
                            
                            <div className="row div-prezzo mt-5">
                                <div className="col-6 col-md-12"><h2 className="text-3 prezzo mt-2 ml-md-auto"><span className="grey">Prezzo: </span>€ {this.props.design.price}</h2></div>
                                <div className="col-6 col-md-12"><button type="button" className="btn bottone-richiesta mt-0" id="bottone-richiesta" data-toggle="modal" data-target="#myModalEmail">Invia richiesta</button></div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default DesignInfo;