import React, {Component} from 'react';
import './tattooerStyle.css';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import Bio from '../Tattooer/Bio';
import Design from '../Tattooer/Tattooer_design';
import Portfolio from '../Tattooer/Portfolio';
import Studio from '../Tattooer/Tattoo_studio';
import ModalEmail from '../Modal/ModalEmail';
//import ModalWhatsapp from '../Modal/ModalWhatsApp';
//import ModalThanks from '../Modal/ModalThanks';


library.add(faAngleLeft)

class Tattooer extends Component {

    constructor(){
        super();

        this.state = {
            Tattooer: []
        }
    }

    componentDidMount() {
        const { match: { params } } = this.props;

        const request = async () => {
            const response = await fetch('http://localhost:5000/api/get/tatuatore/' + params.url);
            const json = await response.json();          
            await this.setState({
                Tattooer: json
            }) 
            console.log(this.state.Tattooer)
        }
        request();
    }

    render(){
        return( 
        <div>
            <div className="jumbotron jumbotron-fluid Jumbotron-1"></div> 

            <Link className="text-back" to='/list_tatuatori'><span className="Red"><FontAwesomeIcon icon="angle-left"/></span>&nbsp;&nbsp;Guarda tutti i tatuatori</Link>

                <div className="container-wrapper">
                    <div className="row main-row">
                        <div className="sidebar d-none d-md-block col-md-3 p-0">
                            <div className="sticky-menu" id="sticky-menu">
                                <nav className="side-menu">
                                    <a href="#biografia"><span className="rect"></span>Biografia</a><br></br>
                                    <a href="#tattoo_design"><span className="rect"></span>Tattoo Design</a><br></br>
                                    <a href="#portfolio"><span className="rect"></span>Portfolio</a><br></br>
                                    <a href="#tattoo_studio"><span className="rect"></span>Tattoo Studio</a><br></br>
                                </nav>
                                <button type="button" className="bottone-consulenza btn m-3" id="bottone-richiesta" data-toggle="modal" data-target="#myModalEmail">Richiedi Consulenza</button>
                            </div>
                        </div>

                        <div className="col col-lg-9 pl-md-5">
                        <Bio tattooer={this.state.Tattooer}></Bio>
                        <Design tattooer={this.state.Tattooer}></Design>
                        <Portfolio tattooer={this.state.Tattooer}></Portfolio>
                        <Studio tattooer={this.state.Tattooer}></Studio>
                        <ModalEmail></ModalEmail>
                        </div>
                    </div>
                </div>
        </div>
        );
    }
}

export default Tattooer
