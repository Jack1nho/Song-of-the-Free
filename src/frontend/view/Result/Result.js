import React, {Component} from 'react';

class Result extends Component {
    constructor(){
        super();

        this.state = {
            Lista: []
        }
    }
    
    componentDidMount() {
        fetch('http://localhost:5000/api/get/tatuatori/last')
        .then(response => response.json())
        .then(data => this.setState({
            Lista: data
        }))
    }
    
    render(){
        return(
            <div>
                {this.state.Lista.map((item, i) => {
                    return <li key={i}>{item.name}</li>
                })}
            </div>
        );
    }
}

export default Result;