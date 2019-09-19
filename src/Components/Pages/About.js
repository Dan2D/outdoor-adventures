import React from 'react'
import Hero from "../Hero/Hero";
import Slider from 'react-slick';
import "./About.scss";

function About() {
    window.scrollTo(0,0);
    const settings = {
        arrows: true,
        infinite: true,
        autoplay: true,
        lazy: 'on-demand',
        autoplaySpeed: 8000,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 9999,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1021,
                settings: {
                    slidesToShow: 4
                }
            },
                {
                    breakpoint: 853,
                    settings: {
                        slidesToShow: 3
                    }
            },
            {
                breakpoint: 630,
                settings: {
                    slidesToShow: 2
                }
        },
        {
            breakpoint: 410,
            settings: {
                slidesToShow: 2
            }
    }
        ]
      };
    return (
        <div className='about-container  '>
            <Hero page='about' title='About' text='Who is Outdoor Adventures?'/>
            <div className='about-section' >
                <img className='about__story-img' src={require("../../images/story-bg.jpg")} alt='kayak rental building' />
                <h3>Our Story</h3>
                <p className='about__story-txt'>
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
            </div>
            <div className='about-slider-container'>
                <Slider {...settings} >
                    <div>
                        <img className='about-slider__img' tabIndex="0" className='slide-img' src={require("../../images/tour1-bg.jpg")} alt="slide" />
                    </div>
                    <div>
                        <img className='about-slider__img' tabIndex="0" className='slide-img' src={require("../../images/tour2-bg.jpg")} alt="slide" />
                    </div>
                    <div>
                        <img className='about-slider__img' tabIndex="0" className='slide-img' src={require("../../images/tour3-bg.jpg")} alt="slide" />
                    </div>
                    <div>
                        <img className='about-slider__img' tabIndex="0" className='slide-img' src={require("../../images/tour4-bg.jpg")} alt="slide" />
                    </div>
                    <div>
                        <img className='about-slider__img' tabIndex="0" className='slide-img' src={require("../../images/tour5-bg.jpg")} alt="slide" />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default About
