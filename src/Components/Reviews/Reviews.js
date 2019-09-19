import React from 'react';
import SVG from 'react-inlinesvg';
import Slider from 'react-slick';
import Card from "../Card";

function Reviews() {
    // Breakpoints work towards to bottom, so below 676 show 1 etc.
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 8000,
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
            <SVG className='review__bg' src={require("../../images/review-bg.svg")} />
            <SVG className='review__svg' src={require("../../images/review-svg.svg")} />
            <Slider {...settings}>
                <div>
                    <Card type='review' cardTitle='Great Staff and Great Gear!' 
                    reviewTxt="This place is great! Aside from renting anything you need, even wetsuits and PFD's alone,&nbsp;
                                 they are super helpful and I actually bought my wetsuit and booties from these guys who &nbsp;
                                  beat REI on the prices. Beautiful location and a must if you're looking to rent SUP's or kayaks!"
                    userName='Jack Martin' />
                    </div>
                    <div>
                    <Card type='review' cardTitle='What an Experience!' 
                    reviewTxt=' Had a great experience this Sunday at Outdoor Adventures!  &nbsp;
                                 Location is excellent and staff is kind and courteous. &nbsp;  
                                   I would definitely recommend this place if you are looking &nbsp;
                                to get on the water.'
                    userName='Kimberly Adams' />
                    </div>
                    <div>
                    <Card type='review' cardTitle='Great Fun and Learned A Lot Too!' 
                    reviewTxt=' Our guide Travis was great!!! &nbsp;
                                 He was knowledgeable and made sure &nbsp;
                                 that our safety was his number one priority! &nbsp;
                                He gave us a bunch of fun facts and was always &nbsp;
                                positive! Great staff, great tour! Worth the trip!'
                    userName='Alan Taylor' />
                </div> 
                <div>
                    <Card type='review' cardTitle='Great Staff and Views!' 
                    reviewTxt=' We Had a great time. The two girls who took us on &nbsp;
                                the tour were awesome and knowledgeable. We got to see two seals. &nbsp;
                                The weather was warm. Definitely recommend this to all. We are newbies &nbsp;
                                to the kayaking and they gave us a good class and we felt very safe on the water.'
                    userName='Marlie Mata' />
                    </div>
                    <div>
                    <Card type='review' cardTitle='Quick, Easy, and Fun' 
                    reviewTxt='Super efficient staff and a great place to go on hot day!!&nbsp;
                                 Rented a double kayak and had an hour to roam around the water!!&nbsp;
                                  Would definitely recommend this place if you are wanting to get out&nbsp;
                                   on the water and for a good price!! Will be back!!'
                    userName='Kyle Lawson' />
                    </div>
                    <div>
                    <Card type='review' cardTitle='Pet and People Friendly' 
                    reviewTxt="Called ahead about bringing my dog out on the SUP's for her first time and &nbsp;
                                 didn't have a bit of trouble. Staff was at tentative and helpful, and I was &nbsp;
                                  there on a busy Saturday morning. Equipment was great too, I'll definitely be back!"
                    userName='Jake Mercer' />
                </div> 
            </Slider> 
            <div className='review-extra-bg' />
        </div>
    )
}

export default Reviews


