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
                        <img tabIndex="0" className='slide-img' src={require("../../images/hero-bg.jpg")} alt="slide" />
                    </div>
                    <div>
                        <img tabIndex="0" className='slide-img' src={require("../../images/slide-2.jpg")} alt="slide" />
                    </div>
                    <div>
                        <img tabIndex="0" className='slide-img' src={require("../../images/slide-3.jpg")} alt="slide" />
                    </div>
                    <div>
                        <img tabIndex="0" className='slide-img' src={require("../../images/tour1-bg.jpg")} alt="slide" />
                    </div>
                    <div>
                        <img tabIndex="0" className='slide-img' src={require("../../images/tour2-bg.jpg")} alt="slide" />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default About
