import React, {Component} from 'react';
import MyMapComponent from '../Tattooer/MyMapComponent';

class TattooStudio extends Component {
    
    render(){
        return(
            <div className="tattoo_studio" id="tattoo_studio">
                    <h2 className="text-3 my-2">Tattoo Studio di {this.props.tattooer.name} {this.props.tattooer.surname}</h2>
                    <h3 className="position">{this.props.tattooer.address} <br></br>{this.props.tattooer.cap}, {this.props.tattooer.city} {this.props.tattooer.provincia}</h3>

                    <div className="my-5" id="map">
                        <MyMapComponent tattooer={this.props.tattooer}></MyMapComponent>
                    </div>
            </div>
        );
    }
}

export default TattooStudio;