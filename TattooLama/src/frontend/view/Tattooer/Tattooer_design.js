import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class TattoerDesign extends Component {
    
    render(){
        return(
            <div className="tattoo_design" id="tattoo_design">
                            <h2 className="text-3 my-4">Tattoo design di Gianmaurizio Fercioni</h2>
                                <div className="row row-grid">
                                        <div className="col-6 col-sm-6 col-md-3 col-lg">
                                            <Link to='/'>
                                                <img className="square" src="https://via.placeholder.com/168x168.jpg/eae9e5" alt=""/>
                                                <div>
                                                    <h4 className="mt-2 mb-0 textArtista">Artista</h4>
                                                    <h4 className="textPrezzo">Prezzo</h4>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-3 col-lg">
                                                <Link to='/'>
                                                    <img className="square" src="https://via.placeholder.com/168x168.jpg/d7dbe0" alt=""/>
                                                    <div>
                                                        <h4 className="mt-2 mb-0 textArtista">Artista</h4>
                                                        <h4 className="textPrezzo">Prezzo</h4>
                                                    </div>
                                                </Link>
                                        </div>
                                        <div className="d-none d-md-block col-md-3 col-lg">
                                                <Link to='/'>
                                                    <img className="square" src="https://via.placeholder.com/168x168.jpg/d7dbe0" alt=""/>
                                                    <div>
                                                        <h4 className="mt-2 mb-0 textArtista">Artista</h4>
                                                        <h4 className="textPrezzo">Prezzo</h4>
                                                    </div>
                                                </Link>
                                        </div>
                                        <div className="d-none d-md-block col-md-3 col-lg">
                                                <Link to='/'>
                                                    <img className="square" src="https://via.placeholder.com/168x168.jpg/383838" alt=""/>
                                                    <div>
                                                        <h4 className="mt-2 mb-0 textArtista">Artista</h4>
                                                        <h4 className="textPrezzo">Prezzo</h4>
                                                    </div>
                                                </Link>
                                        </div>
                                </div>

                                <div className="row row-grid">
                                        <div className="col-6 col-sm-6 col-md-3 col-lg">
                                            <Link to='/'>
                                                <img className="square" src="https://via.placeholder.com/168x168.jpg/eae9e5" alt=""/>
                                                <div>
                                                    <h4 className="mt-2 mb-0 textArtista">Artista</h4>
                                                    <h4 className="textPrezzo">Prezzo</h4>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-3 col-lg">
                                                <Link to='/'>
                                                    <img className="square" src="https://via.placeholder.com/168x168.jpg/d7dbe0" alt=""/>
                                                    <div>
                                                        <h4 className="mt-2 mb-0 textArtista">Artista</h4>
                                                        <h4 className="textPrezzo">Prezzo</h4>
                                                    </div>
                                                </Link>
                                        </div>
                                        <div className="d-none d-md-block col-md-3 col-lg">
                                                <Link to='/'>
                                                    <img className="square" src="https://via.placeholder.com/168x168.jpg/d7dbe0" alt=""/>
                                                    <div>
                                                        <h4 className="mt-2 mb-0 textArtista">Artista</h4>
                                                        <h4 className="textPrezzo">Prezzo</h4>
                                                    </div>
                                                </Link>
                                        </div>
                                        <div className="d-none d-md-block col-md-3 col-lg">
                                                <Link to='/'>
                                                    <img className="square" src="https://via.placeholder.com/168x168.jpg/383838" alt=""/>
                                                    <div>
                                                        <h4 className="mt-2 mb-0 textArtista">Artista</h4>
                                                        <h4 className="textPrezzo">Prezzo</h4>
                                                    </div>
                                                </Link>
                                        </div>
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