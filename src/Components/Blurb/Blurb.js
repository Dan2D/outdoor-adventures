import React from 'react';
import {Link} from 'react-router-dom';
import Slider from 'react-slick';

function Blurb() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div className='blurb-container'>
            <Slider {...settings}>
                <div>
                    <img src={require("../../Images/hero-bg.jpg")} alt="slide" />
                </div>
                <div>
                    <img src={require("../../Images/slide-2.jpg")} alt="slide" />
                </div>
                <div>
                    <img src={require("../../Images/slide-3.jpg")} alt="slide" />
                </div>
            </Slider>
            <p>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Ut tristique enim ut felis posuere consequat sit amet ut orci. 
                Nam et enim vitae tellus consectetur rutrum.  Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Ut tristique enim ut felis posuere consequat 
                sit amet ut orci. Nam et enim vitae tellus consectetur rutrum. 
            </p>
            <Link className='blurb__btn btn' to="/tours">Check it Out!</Link>
        </div>
    )
}

export default Blurb
