import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class DesignTattooer extends Component {
    
    render(){
        return(
            <div className="tattooer">
                    <div className="row">
                        <div className="col-12 col-md-8 my-2">
                            <div className="text-3">Tatuatore: <Link className="grey" to={'/tatuatore/' + this.props.tattooer.url}>{this.props.tattooer.name} {this.props.tattooer.surname}</Link></div>
                            <div className="col-12 d-md-none pl-0 my-3">
                                <Link to={'/tatuatore/' + this.props.tattooer.url}><img src={'../images/tatuatori/img/' + this.props.tattooer.image} className="grid img-artist" alt="" /></Link>
                            </div>
                            <div className="normal-text mt-2">{this.props.tattooer.biography}</div>
                        </div>
                        <div className="col-12 col-md-4 d-none d-md-block">
                        <Link to={'/tatuatore/' + this.props.tattooer.url}><img src={'../images/tatuatori/img/' + this.props.tattooer.image} className="grid img-artist float-md-right float-left" alt="" /></Link>
                        </div>
                    </div>
                </div>
        );
    }
}

export default DesignTattooer;