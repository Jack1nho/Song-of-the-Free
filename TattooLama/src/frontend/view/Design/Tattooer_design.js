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
        console.log(this.props.tattooer)
        const request = async () => {
            const response = await fetch('http://localhost:5000/api/get/design/tatuatore/'+ this.props.tattooer._id);
            const json = await response.json();          
            await this.setState({
                Design: json
            }) 
            
        }
        request();
    }

    render(){
        return(
            <div className="tattooer-design my-5">
                    <div className="text-3 mb-3">Altri Tattoo Design di: <span className="grey">{this.props.tattooer.name} {this.props.tattooer.surname}</span></div>

                    <div className="row row-grid">
                    {this.state.Design.map((item, i) => {
                        return <div className="col-6 col-sm-6 col-md-3 col-lg" key={i}>
                                    <Link className="grid" to={'/design/' + item.url_design} >
                                        <img className="square" src={'../' + item.image} alt=""/>
                                            <h4 className="mt-2 mb-0 textArtista">{item.name_design}</h4>
                                            <h4 className="textPrezzo">{item.price}</h4>
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