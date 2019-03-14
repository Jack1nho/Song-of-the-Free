import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class GrigliaHome extends Component {
    constructor(){
        super();

        this.state = {
            Design: []
        }
    }
    
    componentDidMount() {
        fetch('https://tattoolama.herokuapp.com/api/get/tattooimages/last')
        .then(response => response.json())
        .then(data => this.setState({
            Design: data
        }))
    }

    render(){
        return(
            <div>
                <div className="row row-grid">
                {this.state.Design.map((item, i) => {
                        return <div className="col-6 col-sm-6 col-md-3 col-lg-15 grid-child" key={i}>
                                    <Link className="grid" to={'/tatuaggio/' + item.url_design}>
                                        <img className="square" src={'images/design/img/' + item.image} alt=""/>
                                            <h4 className="mt-2 mb-0 textNome">{item.name_design}</h4>
                                            <h4 className="mb-0 textArtista">{item.associated_artist}</h4>
                                            <h4 className="textPrezzo">€ {item.price}</h4>
                                    </Link>
                                </div>  
                    }                   
                )} 
                </div>   
            </div>
        );
    }
}

export default GrigliaHome;