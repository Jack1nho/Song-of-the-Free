import React, {Component} from 'react';

class GrigliaDesign extends Component {
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
                <ul className="row row-grid">
                {this.state.Design.map((item, i) => {
                    const key = null;
                    if (key === 2 || 3) {
                        return <li className="d-none d-md-block col-md-3 col-lg" key={i}>
                                    <a href="" >
                                        <img className="square" src={item.image} alt=""/>
                                        <div>
                                            <h4 className="mt-2 mb-0 textNome">{item.name}</h4>
                                            <h4 className="mb-0 textArtista">{item.associated_artist}</h4>
                                            <h4 className="textPrezzo">{item.price}</h4>
                                        </div>
                                    </a>
                                </li>  
                    }

                    if (key === 4) {
                        return <li className="d-none d-lg-block col-lg" key={i}>
                                    <a href="" >
                                        <img className="square" src={item.image} alt=""/>
                                        <div>
                                            <h4 className="mt-2 mb-0 textNome">{item.name}</h4>
                                            <h4 className="mb-0 textArtista">{item.associated_artist}</h4>
                                            <h4 className="textPrezzo">{item.price}</h4>
                                        </div>
                                    </a>
                                </li>
                    } else {
                    return <li className="col-6 col-sm-6 col-md-3 col-lg" key={i}>
                                <a href="" >
                                    <img className="square" src={item.image} alt=""/>
                                    <div>
                                        <h4 className="mt-2 mb-0 textNome">{item.name}</h4>
                                        <h4 className="mb-0 textArtista">{item.associated_artist}</h4>
                                        <h4 className="textPrezzo">{item.price}</h4>
                                    </div>
                                </a>
                            </li>  
                }})} 
                </ul>   

                <ul className="row row-grid">
                {this.state.Design.map((item, i) => {
                    const key = null;
                    if (key === 2 || 3) {
                        return <li className="d-none d-md-block col-md-3 col-lg" key={i}>
                                    <a href="" >
                                        <img className="square" src={item.image} alt=""/>
                                        <div>
                                            <h4 className="mt-2 mb-0 textNome">{item.name}</h4>
                                            <h4 className="mb-0 textArtista">{item.associated_artist}</h4>
                                            <h4 className="textPrezzo">{item.price}</h4>
                                        </div>
                                    </a>
                                </li>  
                    }

                    if (key === 4) {
                        return <li className="d-none d-lg-block col-lg" key={i}>
                                    <a href="" >
                                        <img className="square" src={item.image} alt=""/>
                                        <div>
                                            <h4 className="mt-2 mb-0 textNome">{item.name}</h4>
                                            <h4 className="mb-0 textArtista">{item.associated_artist}</h4>
                                            <h4 className="textPrezzo">{item.price}</h4>
                                        </div>
                                    </a>
                                </li>
                    } else {
                    return <li className="col-6 col-sm-6 col-md-3 col-lg" key={i}>
                                <a href="" >
                                    <img className="square" src={item.image} alt=""/>
                                    <div>
                                        <h4 className="mt-2 mb-0 textNome">{item.name}</h4>
                                        <h4 className="mb-0 textArtista">{item.associated_artist}</h4>
                                        <h4 className="textPrezzo">{item.price}</h4>
                                    </div>
                                </a>
                            </li>  
                }})} 
                </ul>
            </div>
        );
    }
}

export default GrigliaDesign;