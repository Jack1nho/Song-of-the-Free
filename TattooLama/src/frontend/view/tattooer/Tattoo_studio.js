import React, {Component} from 'react';

class TattooStudio extends Component {
    
    render(){
        return(
            <div className="tattoo_studio" id="tattoo_studio">
                    <h2 className="text-3 my-2">Tattoo Studio di Gianmaurizio Fercioni</h2>
                    <h3 className="position">Milano<br></br> Via Mercato, 16 <br></br>20121, Milano MI</h3>

                    <div className="my-5" id="map"></div>
            </div>
        );
    }
}

export default TattooStudio;