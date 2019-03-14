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
                    <div className="text-3 mb-3">Ultimi design di: <span className="grey">{this.props.tattooer.name} {this.props.tattooer.surname}</span></div>

                    <Lightbox
                        currentImage={this.state.currentImage}
                        images={[{src: '../images/tatuatori/portfolio/'+this.props.tattooer.portfolio}, {src: '../images/tatuatori/portfolio/'+this.props.tattooer.portfolio1}, {src: '../images/tatuatori/portfolio/'+this.props.tattooer.portfolio2}, {src: '../images/tatuatori/portfolio/'+this.props.tattooer.portfolio3}, {src: '../images/tatuatori/portfolio/'+this.props.tattooer.portfolio4}]}
                        isOpen={this.state.lightboxIsOpen}
                        onClickNext={this.gotoNext}
                        onClickPrev={this.gotoPrevious}
                        onClose={this.closeLightbox}
                    />

                    <div className="row row-grid">
                            <div className="col-6 col-sm-6 col-md-3 col-lg pb-3">
                                <img className="square" src={'../images/tatuatori/portfolio/'+this.props.tattooer.portfolio} onClick={(e) => this.openLightbox(0, e)} alt="" />
                            </div>
                            <div className="col-6 col-sm-6 col-md-3 col-lg pb-sm-3">
                                <img className="square" src={'../images/tatuatori/portfolio/'+this.props.tattooer.portfolio1} onClick={(e) => this.openLightbox(1, e)} alt="" />
                            </div>
                            <div className="col-6 d-md-block col-md-3 col-lg">
                                <img className="square" src={'../images/tatuatori/portfolio/'+this.props.tattooer.portfolio2} onClick={(e) => this.openLightbox(2, e)} alt="" />
                            </div>
                            <div className="col-6 d-md-block col-md-3 col-lg">
                                <img className="square" src={'../images/tatuatori/portfolio/'+this.props.tattooer.portfolio3} onClick={(e) => this.openLightbox(3, e)} alt="" />
                            </div>
                            <div className="d-none d-lg-block col-lg">
                                <img className="square" src={'../images/tatuatori/portfolio/'+this.props.tattooer.portfolio4} onClick={(e) => this.openLightbox(4, e)} alt="" />
                            </div>
                    </div>
            </div>
            );
    }
}

export default LastDesign;