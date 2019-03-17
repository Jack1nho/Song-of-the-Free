import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import SliderSlick from "react-slick";

class Slider extends Component {
    constructor(){
        super();

        this.state = {
            Tattooer: []
        }
    }
    
    componentDidMount() {
        fetch('https://tattoolama.herokuapp.com/api/get/tatuatori/best')
        .then(response => response.json())
        .then(data => this.setState({
            Tattooer: data
        }))
    }

    render(){

        var settings = {
            dots: true,
            infinite: true,
            lazyLoad: 'ondemand',
            slidesToShow: 4,
            slidesToScroll: 2,
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
                    slidesToScroll: 2,
                    dots: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                    slidesToShow: 1.03,
                    slidesToScroll: 1,
                    dots: false
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
                ]
            };

        return(
            <SliderSlick {...settings} className="sliderInHome">
            {this.state.Tattooer.map((item, i) => {
                return <li key={i}><Link to={'/tatuatore/' + item.url}><img src={'images/tatuatori/img/' + item.image} className="img-fluid Rectangle" alt=""/><h1 className="text-slider ml-4">{item.name}<br></br><span className="ml-5">{item.surname}</span></h1></Link></li>     
            })}      
            </SliderSlick>
        );
    }
    
}

export default Slider;

