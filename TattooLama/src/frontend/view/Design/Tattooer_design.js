import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import SliderSlick from "react-slick";

class TattooerDesign extends Component {

    render(){

        var settings = {
            dots: true,
            infinite: true,
            lazyLoad: 'ondemand',
            slidesToShow: 5,
            slidesToScroll: 1,
            accessibility: true,
            touchMove: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true
                    }
                }
                ]
            };

        return(
            <div className="tattooer-design my-5">
                    <div className="text-3 mb-3">Altri Tattoo Design di: <span className="grey">{this.props.tattooer.name} {this.props.tattooer.surname}</span></div>

                    <div className="row row-grid">
                    <SliderSlick {...settings} className="slickDesign">
                    {this.props.design_personal.slice(0,5).map((item, i) => {
                        return <div className="col-xs-6 col-lg" key={i}>
                                    <Link className="grid" to={'/tatuaggio/' + item.url_design} >
                                        <img className="square" src={'../images/design/img/' + item.image} alt=""/>
                                            <h4 className="mt-2 mb-0 textArtista">{item.name_design}</h4>
                                            <h4 className="textPrezzo">€ {item.price}</h4>
                                    </Link>
                                </div>  
                            }                   
                        )}
                    </SliderSlick>
                    </div>
                </div>
            );
    }
}

export default TattooerDesign;