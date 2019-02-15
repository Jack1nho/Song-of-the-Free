import React, {Component} from 'react';
//import axios from 'axios';
import './tattooerStyle.css';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import Bio from '../Tattooer/Bio';
import Design from '../Tattooer/Tattooer_design';
/*import Portfolio from '../Tattooer/Portfolio';*/
import Studio from '../Tattooer/Tattoo_studio';


library.add(faAngleLeft)

class Tattooer extends Component {

    constructor(){
        super();

        this.state = {
            Tattooer: {}
        }
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        //axios.get('/tatuatore/' + params.url);
        //const url = this.props.match.params.url;
        alert (params.url);

        fetch('http://localhost:5000/api/get/tatuatore/' + params.url)
        .then(response => response.json())
        .then(data => this.setState({
            Tattooer: data
        }))

        alert(this.state.Tattooer.name);
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
                                <button type="button" className="bottone-consulenza btn m-3">Richiedi Consulenza</button>
                            </div>
                        </div>

                        <div className="col col-lg-9 pl-md-5">
                        <Bio tattooer={Tattooer} ></Bio>
                        <Design tattooer={Tattooer}></Design>
                        {/* <Portfolio tattooer={Tattooer}></Portfolio> */}
                        <Studio tattooer={Tattooer}></Studio>
                        </div>
                    </div>
                </div>
        </div>
        );
    }
}

export default Tattooer
