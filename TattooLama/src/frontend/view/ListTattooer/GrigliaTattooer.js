import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class GrigliaTattooer extends Component {
    constructor(){
        super();

        this.state = {
            Tattooer: []
        }
    }
    
    componentDidMount() {
        fetch('http://localhost:5000/api/get/tatuatori/all')
        .then(response => response.json())
        .then(data => this.setState({
            Tattooer: data
        }))
    }
    
    render(){
        return(      
            <div>
                <div className="row row-grid my-4">
                {this.state.Tattooer.map((item, i) => {
                        return <div className="col-6 col-sm-6 col-md-3 col-lg-15" key={i}>
                                    <Link to={'/tatuatore/' + item.url} >
                                        <img className="square" src={item.image} alt=""/>
                                        <div>
                                            <h4 class="mt-2 mb-0 textArtista">{item.artist}</h4>
                                            <h4 class="textNome">{item.name}</h4>
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

export default GrigliaTattooer;