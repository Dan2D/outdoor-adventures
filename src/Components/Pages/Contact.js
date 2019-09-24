import React from 'react';

import Hero from "../Hero/Hero";
import ContactForm from "../Contact/ContactForm";
import FAQS from "../Contact/FAQS";
import "./Contact.scss";

function Contact() {
    window.scrollTo(0,0);
    return (
        <div className='contact-container'>
            <Hero page='contact' title='Contact &amp; Info' text='Reach Out and Say Hello!' />
            <div className='contact-bg'>
                <ContactForm />
                <FAQS />
            </div>
        </div>
    )
}

export default Contact
