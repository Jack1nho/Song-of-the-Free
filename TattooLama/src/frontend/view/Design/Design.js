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
//import ModalWhatsapp from '../Modal/ModalWhatsApp';
//import ModalThanks from '../Modal/ModalThanks';

library.add(faAngleLeft)

class Design extends Component {

    constructor(){
        super();

        this.state = {
            Design: [],
            Tattooer: [],
            Design_Personal: []
        }
    }

    componentWillMount() {
        console.log(2);
        const { match: { params } } = this.props;
        
        const request = async () => {
            const response = await fetch('https://tattoolama.herokuapp.com/api/get/design/' + params.url);
            const json = await response.json();          
            await this.setState({
                Design: json
            })

            const response2 = await fetch('https://tattoolama.herokuapp.com/api/get/tatuatore/design/' + this.state.Design._id);
            const json2 = await response2.json();          
            await this.setState({
                Tattooer: json2
            })

            const response3 = await fetch('https://tattoolama.herokuapp.com/api/get/design/tatuatore/'+ this.state.Tattooer._id);
            const json3 = await response3.json();          
            await this.setState({
                Design_Personal: json3
            })

        }
        request();    
    }

    componentWillReceiveProps(nextProps) {
        console.log(1);
        const { match: { params } } = nextProps;
        
        const request = async () => {
            const response = await fetch('https://tattoolama.herokuapp.com/api/get/design/' + params.url);
            const json = await response.json();          
            await this.setState({
                Design: json
            })

            const response2 = await fetch('https://tattoolama.herokuapp.com/api/get/tatuatore/design/' + this.state.Design._id);
            const json2 = await response2.json();          
            await this.setState({
                Tattooer: json2
            })

            const response3 = await fetch('https://tattoolama.herokuapp.com/api/get/design/tatuatore/'+ this.state.Tattooer._id);
            const json3 = await response3.json();          
            await this.setState({
                Design_Personal: json3
            })

        }
        request();    
    }
    
    render(){
        return(
            <div>
                <div className="jumbotron jumbotron-fluid Jumbotron-design">
                    <div className="container">
                        <h1 className="Text-2-Jumbotron-1">SCEGLI IL TUO</h1>
                        <h1 className="Text-2-Jumbotron-1" style={{ marginLeft: '20%' }}><span className="Red">TATTOO DESIGN</span></h1>
                    </div>
                </div>
                <div className="row div-prezzo-res">
                    <div className="col prezzo text-center"><h2 className="text-3 mt-2 ml-md-auto"><span className="grey">Prezzo: </span>€ {this.state.Design.price}</h2></div>
                    <div className="col text-center"><button type="button" className="btn bottone-richiesta mt-0" id="bottone-richiesta" data-toggle="modal" data-target="#myModalEmail">Invia richiesta</button></div>
                
                </div>
                
                <Link to='/tatuaggi' className="text-back" href="list_design.html"><span className="Red"><FontAwesomeIcon icon="angle-left"/></span>&nbsp;&nbsp;Guarda tutti i tatuaggi</Link>
                <div className="container">
                    <DesignInfo design={this.state.Design} tattooer={this.state.Tattooer}></DesignInfo>
                    <hr className="my-5 d-none d-md-block"></hr>
                    <DesignTattooer design={this.state.Design} tattooer={this.state.Tattooer}></DesignTattooer>
                    <TattooerDesign design={this.state.Design} tattooer={this.state.Tattooer} design_personal={this.state.Design_Personal}></TattooerDesign>
                    <LastDesign design={this.state.Design} tattooer={this.state.Tattooer}></LastDesign>
                    <Answer design={this.state.Design} tattooer={this.state.Tattooer}></Answer>
                    <ModalEmail design={this.state.Design}></ModalEmail>
                </div>
            </div>
            );
    }
}

export default Design;