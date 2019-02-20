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
import ModalEmail from '../Modal/ModalEmail';
import ModalWhatsapp from '../Modal/ModalWhatsApp';
import ModalThanks from '../Modal/ModalThanks';

library.add(faAngleLeft)

class Design extends Component {

    constructor(){
        super();

        this.state = {
            Design: [],
            Tattooer: []
        }
    }

    componentDidMount() {
        const { match: { params } } = this.props;

        fetch('https://tattoolama.herokuapp.com/api/get/design/' + params.url)
        .then(response => response.json())
        .then(data => this.setState({
            Design: data
        }))
    }
    
    render(){
        return(
            <div>
                <div className="jumbotron jumbotron-fluid Jumbotron-design">
                    <div className="container">
                        <h1 className="Text-2-Jumbotron-1">SCEGLI IL TUO</h1>
                        <h1 className="Text-2-Jumbotron-1" style={{ marginLeft: '20%' }}><span className="Red">TATTO DESIGN</span></h1>
                    </div>
                </div>

                <Link to='/list_design' className="text-back" href="list_design.html"><span className="Red"><FontAwesomeIcon icon="angle-left"/></span>&nbsp;&nbsp;Guarda tutti i tatuaggi</Link>
                <div className="container-wrapper">
                    <DesignInfo design={this.state.Design} tattooer={this.props.Tattooer}></DesignInfo>
                    <hr className="my-5 d-none d-md-block"></hr>
                    <DesignTattooer design={this.state.Design} tattooer={this.props.Tattooer}></DesignTattooer>
                    <TattooerDesign design={this.state.Design} tattooer={this.props.Tattooer}></TattooerDesign>
                    <LastDesign design={this.state.Design} tattooer={this.props.Tattooer}></LastDesign>
                    <Answer design={this.state.Design} tattooer={this.props.Tattooer}></Answer>
                    <ModalEmail></ModalEmail>
                </div>
            </div>
            );
    }
}

export default Design;