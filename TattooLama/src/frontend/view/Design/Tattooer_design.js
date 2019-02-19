import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class TattooerDesign extends Component {
    constructor(){
        super();

        this.state = {
            Design: []
        }
    }
    
    componentDidMount() {
        fetch('http://localhost:5000/api/get/design/tatuatore/' + this.props.tattoer._id)
        .then(response => response.json())
        .then(data => this.setState({
            Design: data
        }))
    }

    render(){
        return(
            <div className="tattooer-design my-5">
                    <div className="text-3 mb-3">Altri Tattoo Design di: <span className="grey">{this.props.tattoer.name} {this.props.tattoer.surname}</span></div>

                    <div className="row row-grid">
                    {this.state.Design.map((item, i) => {
                        return <div className="col-6 col-sm-6 col-md-3 col-lg-15 grid-child" key={i}>
                                    <Link className="grid" to={'/design/' + item.url_design}>
                                        <img className="square" src={item.image} alt=""/>
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

export default TattooerDesign;