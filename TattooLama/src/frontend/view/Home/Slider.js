import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Slider extends Component {
    constructor(){
        super();

        this.state = {
            Tattooer: []
        }
    }
    
    componentDidMount() {
        fetch('http://localhost:5000/api/get/tatuatori/best')
        .then(response => response.json())
        .then(data => this.setState({
            Tattooer: data
        }))
    }

    render(){
        return(
            <ul className="slickHome">
            {this.state.Tattooer.map((item, i) => {
                return <li key={i}><Link to='/tatuatore/{item.url}'><img src={item.image} className="img-fluid Rectangle" alt=""/><h1 className="text-slider">{item.name}<br></br>{item.surname}</h1></Link></li>     
            })}      
            </ul>
        );
    }
    
}

export default Slider;

