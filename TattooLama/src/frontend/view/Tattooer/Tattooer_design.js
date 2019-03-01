import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class TattoerDesign extends Component {
    constructor(){
        super();

        this.state = {
            Design: []
        }
    }
    
    componentDidMount() {

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
            <div className="tattoo_design" id="tattoo_design">
                            <h2 className="text-3 my-4">Tattoo design di {this.props.tattooer.name} {this.props.tattooer.surname}</h2>
                                <div className="row row-grid">
                                    {this.state.Design.map((item, i) => {
                                        return <div className="col-6 col-sm-6 col-md-3 col-lg" key={i}>
                                                    <Link className="grid" to={'/design/' + item.url_design} >
                                                        <img className="square" src={'../' + item.image} alt=""/>
                                                            <h4 className="mt-2 mb-0 textArtista">{item.associated_artist}</h4>
                                                            <h4 className="textPrezzo">{item.price}</h4>
                                                    </Link>
                                                </div>  
                                        }                   
                                    )}    
                                </div>    
                            <div className="my-4 impagination">
                                <hr></hr>
                                    <button className="disabled btn bottone-next btn-sm mx-2" type="button">Pagine precedente</button>
                                    <button className="btn bottone-next btn-sm mx-2" type="button">Prossima pagina</button>
                            </div>
                        </div>
        );
    }
}

export default TattoerDesign;