import React, {useState} from 'react';
import './Contact.scss';

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const submitFinalForm = () => {
        alert('Thanks for reaching out! I will get back to you as soon as possible.');
        console.log(name, email, message);
        setEmail('');
        setName('');
        setMessage('');
    }

    const name_handler = (e) => {
        setName(e.target.value);
    }

    const email_handler = (e) => {
        setEmail(e.target.value);
    }

    const message_handler = (e) => {
        setMessage(e.target.value);
    }

    return (
        <div className='main-contact-div'>
            <h1>Get In Touch</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className='name-input'>
                    <input type={'text'} placeholder='Name' onChange={name_handler} value={name}/>
                </div>
                <div className='email-input'>
                    <input type={'email'} placeholder='Email' onChange={email_handler} value={email}/>
                </div>
                <div className='message-input'>
                    <textarea placeholder='Message' rows={'20'} cols={'50'} onChange={message_handler} value={message}></textarea>
                </div>
                <div className='submit-button'>
                    <button type='submit' onClick={submitFinalForm}>Submit</button>
                </div>
            </form>
        </div>
    )
}
