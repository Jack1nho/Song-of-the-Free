import React, {Component} from 'react';

class Portfolio extends Component {
    
    render(){
        return(
            <div className="portfolio" id="portfolio">
                                <h2 className="text-3 my-4">Ultimi tattoo di Gianmaurizio Fercioni</h2>
                                <div className="row row-grid">
                                        <div className="col-6 col-lg pb-3">
                                            <img id="myImg" className="square img1" src="https://via.placeholder.com/168x168.jpg/eae9e5" onClick="well(this.src)" alt=""/>
                                        </div>
                                        <div className="col-6 col-lg pb-sm-3">
                                            <img id="myImg" className="square img2" src="https://via.placeholder.com/168x168.jpg/eae9e9" onClick="well(this.src)" alt=""/>
                                        </div>
                                        <div className="col-6 col-lg">
                                            <img id="myImg" className="square img3" src="https://via.placeholder.com/168x168.jpg/d7dbe0" onClick="well(this.src)" alt=""/>
                                        </div>
                                        <div className="col-6 col-lg">
                                            <img id="myImg" className="square img4" src="https://via.placeholder.com/168x168.jpg/383838" onClick="well(this.src)" alt=""/>
                                        </div>

                                        <div id="myLightbox" className="lightbox">
                                            <span className="closeX"><i className="fas fa-times"></i></span>
                                            <span className="next"><i className="fa fa-angle-right"></i></span>
                                            <span className="prev"><i className="fa fa-angle-left"></i></span>
                                            <img className="modal-content-lightbox" id="img01" alt=""/>
                                        </div>
                                </div>
                                <div className="jumbotron jumbotron-fluid Jumbotron-artista my-5">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-12 col-lg-10">
                                                <h2 className="text-1-jumbotron-artista">Vuoi una consulenza da {this.props.tattooer.name} {this.props.tattooer.surname}?</h2> 
                                                <h3 className="text-2-jumbotron-artista">Descrivi la tua idea di tattoo e {this.props.tattooer.name} {this.props.tattooer.surname} ti risponderà a breve!</h3> 
                                            </div>
                                            <div className="col-12 col-lg-2">
                                                <button type="button" className="btn bottone-consulenza-2 float-lg-right">Richiedi Consulenza</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>      
                        </div>
        );
    }
}

export default Portfolio;