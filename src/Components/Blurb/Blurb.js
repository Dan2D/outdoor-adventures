import React from 'react';
import SVG from 'react-inlinesvg';
import {Link} from 'react-router-dom';
import Slider from 'react-slick';

function Blurb() {
    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 8000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div className='blurb-container'>
            <SVG className='blurb__logo-bg' src={require("../../images/site-logo.svg")} preProcessor={code => code.replace(/fill=".*?"/g, 'fill="black"')} />
            <Slider {...settings}>
                <div>
                    <img src={require("../../images/rentals/kayaks-bg.jpg")} alt="slide" />
                </div>
                <div>
                    <img src={require("../../images/slide-2.jpg")} alt="slide" />
                </div>
                <div>
                    <img src={require("../../images/slide-3.jpg")} alt="slide" />
                </div>
            </Slider>
            <p>
            Our mission is to provide people with a means to experience the natural wonders
             of our wonderful little corner of the world while prioritizing safety and fun. Environmental
              protection and education are very important to us and so we incorporate teachings about 
              the local ecology and offering simple ways to positively impact the shoreline and waterways,
               like picking up trash and minimizing harmful runoff. 
            <br/><br/>
            We offer only the highest quality tours with our attention to detail and sites, the highest rated customer service,
             and a fantastically amazing staff at your service. Just checkout our ratings and reviews
             online!
            </p>
            <Link className='blurb__btn btn' to="/explore">Check it Out!</Link>
        </div>
    )
}

export default Blurb
