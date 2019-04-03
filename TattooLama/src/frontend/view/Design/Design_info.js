import React, {Component} from 'react';
import './designStyle.css';

class DesignInfo extends Component {

    render(){

        const style = ""+this.props.design.style;

        return(
            <div className="design my-4">
                    <div className="row">
                        <div className="col-12 col-md text-md-right text-center">
                                <img src={'../images/design/img/' + this.props.design.image} className="img-design" alt=""/>
                        </div>
                        <div className="col-12 col-md">
                            <h2 className="text-3 mt-md-auto mt-5">{this.props.design.name_design}</h2>
                                <div className="row">
                                    <div className="col-6 col-md-12">
                                        <h3 className="description float-md-none float-left"><strong>Tattoo Artist:<br></br></strong> {this.props.tattooer.name} {this.props.tattooer.surname}</h3>
                                    </div>
                                    <div className="col-6 col-md-12">
                                        <h3 className="description"><strong>Città dello studio:<br></br></strong> {this.props.tattooer.city}</h3>
                                        
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 col-md-12">
                                        <h3 className="description mt-md-0 mt-4"><strong>Dimensione:<br></br></strong> {this.props.design.altezza}x{this.props.design.larghezza} cm</h3>
                                    </div>
                                    <div className="col-6 col-md-12">
                                        <h3 className="description mt-4"><strong>Stili:<br></br></strong> {(style || []).split(", ").map(function(place, i) {
                                            return <h3 key={i} className="description mt-0 mt-md-3"><span className="Red">#</span>{place}&nbsp;</h3>
                                        })}</h3>
                                        
                                    </div>
                                </div>
                            
                            <div className="row div-prezzo">
                                <div className="col-6 col-md-12 prezzo"><h2 className="text-3 mt-2 ml-md-auto"><span className="grey">Prezzo: </span>€ {this.props.design.price}</h2></div>
                                <div className="col-6 col-md-12"><button type="button" className="btn bottone-richiesta mt-0" data-toggle="modal" data-target="#myModalEmail">Invia richiesta</button></div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default DesignInfo;