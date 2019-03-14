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
        fetch('https://tattoolama.herokuapp.com/api/get/tatuatori/all')
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
                        return <div className="col-6 col-sm-6 col-md-3 col-lg-3" key={i}>
                                    <Link className="grid" to={'/tatuatore/' + item.url} >
                                        <img className="square" src={'images/tatuatori/img/'+item.image} alt=""/>
                                            <h4 className="mt-2 mb-0 textArtista">{item.tattoo_studio}</h4>
                                            <h4 className="textNome">{item.name} {item.surname}</h4>
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