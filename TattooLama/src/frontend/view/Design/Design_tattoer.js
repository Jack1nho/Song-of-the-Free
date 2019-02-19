import React, {Component} from 'react';

class DesignTattooer extends Component {
    
    render(){
        return(
            <div className="tattooer">
                    <div className="row">
                        <div className="col-12 col-md-8 my-2">
                            <div className="text-3">Tatuatore: <span className="grey">{this.props.tattooer.name} {this.props.tattooer.surname}</span></div>
                            <div className="col-12 d-md-none pl-0 my-3">
                                <img src={'../' + this.props.tattooer.name} className="img-artist" alt="" />
                            </div>
                            <div className="normal-text mt-2">{this.props.tattooer.biography}</div>
                        </div>
                        <div className="col-12 col-md-4 d-none d-md-block">
                            <img src={'../' + this.props.tattooer.name} className="img-artist float-md-right float-left" alt="" />
                        </div>
                    </div>
                </div>
        );
    }
}

export default DesignTattooer;