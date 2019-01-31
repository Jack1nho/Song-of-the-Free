import React, {Component} from 'react';

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
                return <li key={i}><div><img data-lazy={item.image} className="img-fluid Rectangle" alt=""/></div></li>     
            })}      
            </ul>
        );
    }
}

export default Slider;

