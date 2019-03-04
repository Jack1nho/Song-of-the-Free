import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import SliderSlick from "react-slick";  

class TattoerDesign extends Component {

    
    render(){

        var settings = {
            dots: true,
            infinite: true,
            lazyLoad: 'ondemand',
            slidesToShow: 8,
            slidesToScroll: 8,
            accessibility: true,
            touchMove: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                    slidesToShow: 1.03,
                    slidesToScroll: 1
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
                                <SliderSlick {...settings}>
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
                                    <button className="btn bottone-next btn-sm mx-2" type="button">Pagine precedente</button>
                                    <button className="btn bottone-next btn-sm mx-2" type="button">Prossima pagina</button>
                            </div>
                        </div>
        );
    }
}

export default TattoerDesign;