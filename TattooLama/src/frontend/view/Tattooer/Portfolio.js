import React, {Component} from 'react';
import Lightbox from 'react-images';

class Portfolio extends Component {
    constructor () {
		super();

		this.state = {
			lightboxIsOpen: false,
			currentImage: 0,
		};

		this.closeLightbox = this.closeLightbox.bind(this);
		this.gotoNext = this.gotoNext.bind(this);
		this.gotoPrevious = this.gotoPrevious.bind(this);
		this.openLightbox = this.openLightbox.bind(this);
    }
    
    openLightbox (index, event) {
		event.preventDefault();
		this.setState({
			currentImage: index,
			lightboxIsOpen: true,
		});
    }
    
    closeLightbox () {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false,
		});
	}
	gotoPrevious () {
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
	}
	gotoNext () {
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
    }

    render(){
        return(
            
            <div className="portfolio" id="portfolio">
                                <h2 className="text-3 my-4">Ultimi tattoo di Gianmaurizio Fercioni</h2>
                                
                                <Lightbox
                                    currentImage={this.state.currentImage}
                                    images={[{src: "https://via.placeholder.com/168x168.jpg/eae9e5"}, {src: "https://via.placeholder.com/168x168.jpg/eae9e9"}, {src: "https://via.placeholder.com/168x168.jpg/d7dbe0"}, {src: "https://via.placeholder.com/168x168.jpg/383838"}]}
                                    isOpen={this.state.lightboxIsOpen}
                                    onClickNext={this.gotoNext}
                                    onClickPrev={this.gotoPrevious}
                                    onClose={this.closeLightbox}
                                />

                                <div className="row row-grid">
                                        <div className="col-6 col-lg pb-3">
                                            <img className="square" src="https://via.placeholder.com/168x168.jpg/eae9e5" onClick={(e) => this.openLightbox(0, e)} alt=""/>
                                        </div>
                                        <div className="col-6 col-lg pb-sm-3">
                                            <img className="square" src="https://via.placeholder.com/168x168.jpg/eae9e9" onClick={(e) => this.openLightbox(1, e)} alt=""/>
                                        </div>
                                        <div className="col-6 col-lg">
                                            <img className="square" src="https://via.placeholder.com/168x168.jpg/d7dbe0" onClick={(e) => this.openLightbox(2, e)} alt=""/>
                                        </div>
                                        <div className="col-6 col-lg">
                                            <img className="square" src="https://via.placeholder.com/168x168.jpg/383838" onClick={(e) => this.openLightbox(3, e)} alt=""/>
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
                                                <button type="button" className="btn bottone-consulenza-2 float-lg-right" id="bottone-richiesta" data-toggle="modal" data-target="#myModalEmail">Richiedi Consulenza</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>      
                        </div>
        );
    }
}

export default Portfolio;