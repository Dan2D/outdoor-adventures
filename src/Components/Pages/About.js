import React from 'react'
import Hero from "../Hero/Hero";
import Slider from 'react-slick';
import "./About.scss";

function About() {
    window.scrollTo(0,0);
    const settings = {
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      };
    return (
        <div className='about-container  '>
            <Hero page='about' title='About' text='Who is Outdoor Adventures?'/>
            <div className='about-section' >
                <img className='about__story-img' src={require("../../Images/slide-2.jpg")} alt='person on sup' />
                <h3>Our Story</h3>
                <p className='about__story-txt'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut tristique enim ut felis posuere consequat sit amet ut orci.
                Nam et enim vitae tellus consectetur rutrum. 
                <br/><br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut tristique enim ut felis posuere consequat sit amet ut orci.
                Nam et enim vitae tellus consectetur rutrum.  
                </p>
            </div>
            <div className='about-slider-container'>
                <Slider {...settings} >
                    <div>
                        <img tabindex="0" className='slide-img' src={require("../../Images/hero-bg.jpg")} alt="slide" />
                    </div>
                    <div>
                        <img tabindex="0" className='slide-img' src={require("../../Images/slide-2.jpg")} alt="slide" />
                    </div>
                    <div>
                        <img tabindex="0" className='slide-img' src={require("../../Images/hero-bg.jpg")} alt="slide" />
                    </div>
                    <div>
                        <img tabindex="0" className='slide-img' src={require("../../Images/slide-2.jpg")} alt="slide" />
                    </div>
                    <div>
                        <img tabindex="0" className='slide-img' src={require("../../Images/hero-bg.jpg")} alt="slide" />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default About
