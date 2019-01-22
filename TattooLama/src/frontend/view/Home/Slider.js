import React, {Component} from 'react';
import '../Home/slick/slick-theme.css';
import '../Home/slick/slick.css';
import $ from 'jquery'; 

class Slider extends Component {

    componentDidMount() {
        var slickhome = $('.slickHome');
        slickhome.slick({
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
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1.10,
                  slidesToScroll: 1
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
        });
    
        $('.single-item').slick({
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 4
        });
              
      };
    
    render(){
        return(
            <div className="slickHome">
                <div><img data-lazy="https://via.placeholder.com/219x161.jpg/383838" className="img-fluid Rectangle" alt=""/></div>
                <div><img data-lazy="https://via.placeholder.com/219x161.jpg/383838" className="img-fluid Rectangle" alt=""/></div>
                <div><img data-lazy="https://via.placeholder.com/219x161.jpg/383838" className="img-fluid Rectangle" alt=""/></div>
                <div><img data-lazy="https://via.placeholder.com/219x161.jpg/383838" className="img-fluid Rectangle" alt=""/></div>
                <div><img data-lazy="https://via.placeholder.com/219x161.jpg/383838" className="img-fluid Rectangle" alt=""/></div>
                <div><img data-lazy="https://via.placeholder.com/219x161.jpg/383838" className="img-fluid Rectangle" alt=""/></div>         
            </div>
        );
    }
}

export default Slider;

