import React, {Component} from 'react';
import './designStyle.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import DesignInfo from '../Design/Design_info';
import DesignTattooer from '../Design/Design_tattoer';
import TattooerDesign from '../Design/Tattooer_design';
import LastDesign from '../Design/Last_design';
import Answer from '../Design/Answer';

library.add(faAngleLeft)

class Design extends Component {
    
    render(){
        return(
            <div>
                <div class="jumbotron jumbotron-fluid Jumbotron-design">
                    <div class="container">
                        <h1 class="Text-2-Jumbotron-1">SCEGLI IL TUO</h1>
                        <h1 class="Text-2-Jumbotron-1"><span class="Red">TATTO DESIGN</span></h1>
                    </div>
                </div>

                <Link to='/list_design' class="text-back" href="list_design.html"><span class="Red"><FontAwesomeIcon icon="angle-left"/></span>&nbsp;&nbsp;Guarda tutti i tatuaggi</Link>
                <div className="container-wrapper">
                    <DesignInfo></DesignInfo>
                    <hr className="my-5 d-none d-md-block"></hr>
                    <DesignTattooer></DesignTattooer>
                    <TattooerDesign></TattooerDesign>
                    <LastDesign></LastDesign>
                    <Answer></Answer>
                </div>
            </div>
            );
    }
}

export default Design;