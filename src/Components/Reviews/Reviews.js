import React from 'react';

import Slider from 'react-slick';
import Card from "../Card";

function Reviews() {
    // Breakpoints work towards to bottom, so below 676 show 1 etc.
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 1481,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 9999,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
      };
    return (
        <div className='review-container'>
            <Slider {...settings}>
                <div>
                    <Card type='review' cardTitle='Great Staff and Views!' 
                    reviewTxt=' We Had a great time. The two girls who took us on 
                                the tour were awesome and knowledgeable. We got to see two seals. 
                                The weather was warm. Definitely recommend this to all. We are newbies 
                                to the kayaking and they gave us a good class and we felt very safe on the water.'
                    userName='Marlie Mata' />
                    </div>
                    <div>
                    <Card type='review' cardTitle='What an Experience!' 
                    reviewTxt=' Had a great experience this Sunday at Outdoor Adventures! 
                                Location is excellent and staff is kind and courteous. 
                                I would definitely recommend this place if you are looking 
                                to get on the water.'
                    userName='Kimberly Adams' />
                    </div>
                    <div>
                    <Card type='review' cardTitle='Great Fun and Learned A Lot Too!' 
                    reviewTxt=' Our guide Travis was great!!! 
                                He was knowledgeable and made sure 
                                that our safety was his number one priority! 
                                He gave us a bunch of fun facts and was always 
                                positive! Great staff, great tour! Worth the trip!'
                    userName='Alan Taylor' />
                </div> 
                <div>
                    <Card type='review' cardTitle='Great Staff and Views!' 
                    reviewTxt=' We Had a great time. The two girls who took us on 
                                the tour were awesome and knowledgeable. We got to see two seals. 
                                The weather was warm. Definitely recommend this to all. We are newbies 
                                to the kayaking and they gave us a good class and we felt very safe on the water.'
                    userName='Marlie Mata' />
                    </div>
                    <div>
                    <Card type='review' cardTitle='What an Experience!' 
                    reviewTxt=' Had a great experience this Sunday at Outdoor Adventures! 
                                Location is excellent and staff is kind and courteous. 
                                I would definitely recommend this place if you are looking 
                                to get on the water.'
                    userName='Kimberly Adams' />
                    </div>
                    <div>
                    <Card type='review' cardTitle='Great Fun and Learned A Lot Too!' 
                    reviewTxt=' Our guide Travis was great!!! 
                                He was knowledgeable and made sure 
                                that our safety was his number one priority! 
                                He gave us a bunch of fun facts and was always 
                                positive! Great staff, great tour! Worth the trip!'
                    userName='Alan Taylor' />
                </div> 
            </Slider> 
            <div className='review-extra-bg' />
        </div>
    )
}

export default Reviews


