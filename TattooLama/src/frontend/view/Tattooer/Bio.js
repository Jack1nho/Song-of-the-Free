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
                    <div className="col-12 col-lg-5">
                        <img className="img-artist" src={'../'+this.props.tattooer.image} alt=""/>
                    </div>
                    <div className="col-12 col-lg-7 col-name">
                        <h1 className="nome p-0">{this.props.tattooer.name}</h1>
                        <h1 className="cognome">{this.props.tattooer.surname}</h1>
                        <span className="badge top-artist"><FontAwesomeIcon icon="star"/>&nbsp;&nbsp;&nbsp;TOP ARTIST</span>
                    </div>   
                </div>

                <div className="biografia" id="biografia">
                    <h2 className="text-3 my-4"> Biografia Tatuatore</h2>
                    <h2 className="normal-text">{this.props.tattooer.biography}</h2>
                </div>         
            </div>
        );
    }
}

export default Bio;