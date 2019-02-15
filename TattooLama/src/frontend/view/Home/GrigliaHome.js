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
        fetch('http://localhost:5000/api/get/tattooimages/last')
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
                                    <Link to={'/design/' + item.url_design} >
                                        <img className="square" src={item.image} alt=""/>
                                        <div>
                                            <h4 className="mt-2 mb-0 textNome">{item.name_design}</h4>
                                            <h4 className="mb-0 textArtista">{item.associated_artist}</h4>
                                            <h4 className="textPrezzo">€ {item.price}</h4>
                                        </div>
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