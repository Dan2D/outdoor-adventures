import React from 'react';

function ContactForm() {
    return (
        <div className='contact-form-container container'>
                <form action='none'>
                    <div className='form-group'>
                        <label htmlFor='form-name'>Name</label>
                        <input id='form-name' className='form-control' type='text' tabIndex="0" required placeholder='Name' aria-label='contact form name input' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='form-email'>Email</label>
                        <input id='form-email' type='email' className='form-control' tabIndex="0" required placeholder='Name@email.com' aria-label='contact form email input' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='form-subject'>Subject</label>
                        <input id='form-subject' type='text' className='form-control' tabIndex="0" required placeholder='Subject' aria-label='contact form subject input' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='form-message'>Message</label>
                        <textarea id='form-message' className='form-control' placeholder='Message...' rows='5' aria-label='contact form message input area' />
                    </div>
                    <button className='btn contact__send-btn' aria-label='send button'>Send</button>
                </form>
            </div>
    )
}

export default ContactForm
