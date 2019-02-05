import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class GrigliaTattooer extends Component {
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
            Tattooer: data
        }))
    }
    
    render(){
        return(
            <div>
                <ul className="row row-grid">
                {this.state.Design.map((item, i) => {
                    const key = null;
                    if (key === 2 || 3) {
                        return <li className="d-none d-md-block col-md-3 col-lg" key={i}>
                                    <Link to='/'>
                                        <img className="square" src={item.image} alt=""/>
                                        <div>
                                            <h4 class="mt-2 mb-0 textArtista">{item.artist}</h4>
                                            <h4 class="textNome">{item.name}</h4>
                                        </div>
                                    </Link>
                                </li>  
                    }

                    if (key === 4) {
                        return <li className="d-none d-lg-block col-lg" key={i}>
                                    <Link to='/'>
                                        <img className="square" src={item.image} alt=""/>
                                        <div>
                                            <h4 class="mt-2 mb-0 textArtista">{item.artist}</h4>
                                            <h4 class="textNome">{item.name}</h4>
                                        </div>
                                    </Link>
                                </li>
                    } else {
                    return <li className="col-6 col-sm-6 col-md-3 col-lg" key={i}>
                                <Link to='/'>
                                    <img className="square" src={item.image} alt=""/>
                                    <div>
                                        <h4 class="mt-2 mb-0 textArtista">{item.artist}</h4>
                                        <h4 class="textNome">{item.name}</h4>
                                    </div>
                                </Link>
                            </li>  
                }})} 
                </ul>   

                <ul className="row row-grid">
                {this.state.Design.map((item, i) => {
                    const key = null;
                    if (key === 2 || 3) {
                        return <li className="d-none d-md-block col-md-3 col-lg" key={i}>
                                    <Link to='/'>
                                        <img className="square" src={item.image} alt=""/>
                                        <div>
                                            <h4 class="mt-2 mb-0 textArtista">{item.artist}</h4>
                                            <h4 class="textNome">{item.name}</h4>
                                        </div>
                                    </Link>
                                </li>  
                    }

                    if (key === 4) {
                        return <li className="d-none d-lg-block col-lg" key={i}>
                                    <Link to='/'>
                                        <img className="square" src={item.image} alt=""/>
                                        <div>
                                            <h4 class="mt-2 mb-0 textArtista">{item.artist}</h4>
                                            <h4 class="textNome">{item.name}</h4>
                                        </div>
                                    </Link>
                                </li>
                    } else {
                    return <li className="col-6 col-sm-6 col-md-3 col-lg" key={i}>
                                <Link to='/'>
                                    <img className="square" src={item.image} alt=""/>
                                    <div>
                                        <h4 class="mt-2 mb-0 textArtista">{item.artist}</h4>
                                        <h4 class="textNome">{item.name}</h4>
                                    </div>
                                </Link>
                            </li>  
                }})} 
                </ul>
            </div>
        );
    }
}

export default GrigliaTattooer;