import React, {Component} from 'react';
import Lightbox from 'react-images';

class LastDesign extends Component {
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
            <div className="last-design">
                    <div className="text-3 mb-3">Ultimi design di: <span className="grey">Gianmaruizio Fercioni</span></div>

                    <Lightbox
                        currentImage={this.state.currentImage}
                        images={[{src: "https://via.placeholder.com/168x168.jpg/eae9e5"}, {src: "https://via.placeholder.com/168x168.jpg/eae9e9"}, {src: "https://via.placeholder.com/168x168.jpg/d7dbe0"}, {src: "https://via.placeholder.com/168x168.jpg/383838"}, {src: "https://via.placeholder.com/168x168.jpg/383865"}]}
                        isOpen={this.state.lightboxIsOpen}
                        onClickNext={this.gotoNext}
                        onClickPrev={this.gotoPrevious}
                        onClose={this.closeLightbox}
                    />

                    <div className="row row-grid">
                            <div className="col-6 col-sm-6 col-md-3 col-lg pb-3">
                                <img className="square" src="https://via.placeholder.com/168x168.jpg/eae9e5" onClick={(e) => this.openLightbox(0, e)} alt="" />
                            </div>
                            <div className="col-6 col-sm-6 col-md-3 col-lg pb-sm-3">
                                <img className="square" src="https://via.placeholder.com/168x168.jpg/eae9e9" onClick={(e) => this.openLightbox(1, e)} alt="" />
                            </div>
                            <div className="col-6 d-md-block col-md-3 col-lg">
                                <img className="square" src="https://via.placeholder.com/168x168.jpg/d7dbe0" onClick={(e) => this.openLightbox(2, e)} alt="" />
                            </div>
                            <div className="col-6 d-md-block col-md-3 col-lg">
                                <img className="square" src="https://via.placeholder.com/168x168.jpg/383838" onClick={(e) => this.openLightbox(3, e)} alt="" />
                            </div>
                            <div className="d-none d-lg-block col-lg">
                                <img className="square" src="https://via.placeholder.com/168x168.jpg/383865" onClick={(e) => this.openLightbox(4, e)} alt="" />
                            </div>
                    </div>
            </div>
            );
    }
}

export default LastDesign;