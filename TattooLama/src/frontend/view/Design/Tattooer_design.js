import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class TattooerDesign extends Component {
    render(){
        return(
            <div className="tattooer-design my-5">
                    <div className="text-3 mb-3">Altri Tattoo Design di: <span className="grey">Gianmaruizio Fercioni</span></div>

                    <div className="row row-grid">
                            <div className="col-6 col-sm-6 col-md-3 col-lg">
                                <Link to="/" >
                                    <img className="square" src="https://via.placeholder.com/168x168.jpg/383838" alt=""/>
                                    <div>
                                        <h4 className="mt-2 mb-0 textArtista">Nome</h4>
                                        <h4 className="textPrezzo">Prezzo</h4>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-6 col-sm-6 col-md-3 col-lg">
                                    <Link to="/" >
                                        <img className="square" src="https://via.placeholder.com/168x168.jpg/383838" alt="" />
                                        <div>
                                            <h4 className="mt-2 mb-0 textArtista">Nome</h4>
                                            <h4 className="textPrezzo">Prezzo</h4>
                                        </div>
                                    </Link>
                            </div>
                            <div className="d-none d-md-block col-md-3 col-lg">
                                    <Link to="/" >
                                        <img className="square" src="https://via.placeholder.com/168x168.jpg/383838" alt="" />
                                        <div>
                                            <h4 className="mt-2 mb-0 textArtista">Nome</h4>
                                            <h4 className="textPrezzo">Prezzo</h4>
                                        </div>
                                    </Link>
                            </div>
                            <div className="d-none d-md-block col-md-3 col-lg">
                                    <Link to="/" >
                                        <img className="square" src="https://via.placeholder.com/168x168.jpg/383838" alt="" />
                                        <div>
                                            <h4 className="mt-2 mt-2 mb-0 textArtista">Nome</h4>
                                            <h4 className="textPrezzo">Prezzo</h4>
                                        </div>
                                    </Link>
                            </div>
                            <div className="d-none d-lg-block col-lg">
                                    <Link to="/" >
                                        <img className="square" src="https://via.placeholder.com/168x168.jpg/383838" alt="" />
                                        <div>
                                            <h4 className="mt-2 mb-0 textArtista">Nome</h4>
                                            <h4 className="textPrezzo">Prezzo</h4>
                                        </div>
                                    </Link>
                            </div>
                        </div>
                </div>
            );
    }
}

export default TattooerDesign;