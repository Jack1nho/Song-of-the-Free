import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import SliderSlick from "react-slick";  

class TattoerDesign extends Component {

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
    this.slider.slickNext();
    }
    previous() {
    this.slider.slickPrev();
    }

    
    render(){

        var settings = {
            dots: false,
            infinite: true,
            lazyLoad: 'ondemand',
            slidesPerRow: 4,
            rows: 2,
            accessibility: true,
            touchMove: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                    slidesPerRow: 4,
                    rows: 2,
                    dots: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                    slidesPerRow: 2,
                    rows: 2,
                    dots: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                    slidesPerRow: 2,
                    rows: 2,
                    dots: true
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
                ]
            };
        return(
            <div className="tattoo_design" id="tattoo_design">
                            <h2 className="text-3 my-4">Tattoo design di {this.props.tattooer.name} {this.props.tattooer.surname}</h2>
                            
                                <div className="row row-grid">
                                <SliderSlick ref={c => (this.slider = c)} {...settings}>
                                    {this.props.design.map((item, i) => {
                                        return <div className="col-6 col-sm-6 col-md-3 col-lg-3" key={i}>
                                                    <Link className="grid" to={'/design/' + item.url_design} >
                                                        <img className="square" src={'../' + item.image} alt=""/>
                                                            <h4 className="mt-2 mb-0 textArtista">{item.name_design}</h4>
                                                            <h4 className="textPrezzo">€ {item.price}</h4>
                                                    </Link>
                                                </div>  
                                        }                   
                                    )}
                                </SliderSlick>  
                                </div> 
                            
                            <div className="my-4 impagination">
                                <hr></hr>
                                    <button className="btn bottone-next btn-sm mx-2" type="button" onClick={this.previous}>Pagine precedente</button>
                                    <button className="btn bottone-next btn-sm mx-2" type="button" onClick={this.next}>Prossima pagina</button>
                            </div>
                        </div>
        );
    }
}

export default TattoerDesign;