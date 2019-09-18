import React from 'react';
import 'popper.js/dist/umd/popper';
import 'jquery/dist/jquery.slim';
import 'bootstrap/dist/js/bootstrap.min.js'
import SVG from 'react-inlinesvg';

function FAQS() {

    function handleClick(target) {
        if (target.classList.contains('up')) {
            return target.classList.remove('up');
        }
        return target.classList.add('up');
    }

    return (
        <div className='faqs-container'>
            <h3>Frequenlty Asked Questions</h3>
            <div className="accordion faqs-accordian-container container" id="FaqAccordion">
                <div className="card faqs__faq-item">
                    <div className="card-header faqs__faq-top-container" id="headingOne">
                        <h5 className="mb-0">
                            Can I reserve a rental?
                        </h5>
                        <button className="btn btn-link collapsed faq-btn" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                <SVG className='faqs-svg' src={require("../../images/icons/arrow-icon.svg")} onClick={(e) => handleClick(e.currentTarget)} alt='faq arrow icon' />
                        </button>
                    </div>

                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#FaqAccordion">
                        <div className="card-body">
                            Due to peak rental times, rentals are given on a first-come first-serve basis. 
                            Although if you'd like to reserve a time on the water tours are available through reservations.
                        </div>
                    </div>
                </div>
                <div className="card faqs__faq-item">
                    <div className="card-header faqs__faq-top-container" id="headingTwo">
                        <h5 className="mb-0">
                            When is last call for rentals?
                        </h5>
                        <button className="btn btn-link collapsed faq-btn" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <SVG className='faqs-svg' src={require("../../images/icons/arrow-icon.svg")} onClick={(e) => handleClick(e.currentTarget)} alt='faq arrow icon' />
                        </button>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#FaqAccordion">
                        <div className="card-body">
                            Last call for renting gear is 1 hour before closing time. Rentals must also be returned by closing time.
                        </div>
                    </div>
                </div>
                <div className="card faqs__faq-item">
                    <div className="card-header faqs__faq-top-container" id="headingThree">
                        <h5 className="mb-0">
                            How many days am I allowed to rent equipment?
                        </h5>
                        <button className="btn btn-link collapsed faq-btn" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <SVG className='faqs-svg' src={require("../../images/icons/arrow-icon.svg")} onClick={(e) => handleClick(e.currentTarget)} alt='faq arrow icon' />
                        </button>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#FaqAccordion">
                        <div className="card-body">
                            The maximum amount of time any rental may be checked out is 7 days. Any time exceeding this 7 day period will result in extra charges.
                        </div>
                    </div>
                </div>
                <div className="card faqs__faq-item">
                    <div className="card-header faqs__faq-top-container" id="headingFour">
                        <h5 className="mb-0">
                            What happens if I capsize?
                        </h5>
                        <button className="btn btn-link collapsed faq-btn" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            <SVG className='faqs-svg' src={require("../../images/icons/arrow-icon.svg")} onClick={(e) => handleClick(e.currentTarget)} alt='faq arrow icon' />
                        </button>
                    </div>
                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#FaqAccordion">
                        <div className="card-body">
                            <ul>
                                <li>
                                    If you do end up capsizing while out kayaking. The first thing to remember is to remain calm.
                                </li>
                                <li>
                                    If you can try to brace yourself to prevent the kayak from flipping over. On the chance there's no stopping the kayak
                                    from flipping over, take a deep breath before you go underwater. Lean forward as if you're going to kiss the kayak, this allows for an easy exit.
                                </li>
                                <li>
                                    Once underwater, if you've got a spray skirt on the kayak, grab the sides of the cockpit's coaming and slide them forward until you find the
                                    spray skirt's loop. Then give it a nice tug to release the skirt. Once the skirt is released place your hands on the coaming again.
                                    Bring your knees together so they aren't restricted by the high braces and push off the coaming, allowing you to slide out of the kayak.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='extra-bg' />
            </div>
        </div>
    )
}

export default FAQS
