import React from 'react';

import Slider from 'react-slick';
import Card from "../Card";

function Reviews() {
    const settings = {
        className: 'review-slider',
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div className='review-container'>
            <Slider {...settings}>
                <div>
                    <Card type='review' cardTitle='Lorem Ipsum' 
                    reviewTxt=' Lorem ipsum dolor sit amet, consectetur 
                                adipiscing elit. Ut tristique enim ut felis posuere 
                                consequat sit amet ut orci. Nam et enim vitae tellus 
                                consectetur rutrum.'
                    userName='Ipsum Lorem' />
                </div>
                <div>
                <Card type='review' cardTitle='Lorem Ipsum' 
                    reviewTxt=' Lorem ipsum dolor sit amet, consectetur 
                                adipiscing elit. Ut tristique enim ut felis posuere 
                                consequat sit amet ut orci. Nam et enim vitae tellus 
                                consectetur rutrum.'
                    userName='Ipsum Lorem' />
                </div>
                <div>
                <Card type='review' cardTitle='Lorem Ipsum' 
                    reviewTxt=' Lorem ipsum dolor sit amet, consectetur 
                                adipiscing elit. Ut tristique enim ut felis posuere 
                                consequat sit amet ut orci. Nam et enim vitae tellus 
                                consectetur rutrum.'
                    userName='Ipsum Lorem' />
                </div>
            </Slider> 
            <div className='review-extra-bg' />
        </div>
    )
}

export default Reviews
