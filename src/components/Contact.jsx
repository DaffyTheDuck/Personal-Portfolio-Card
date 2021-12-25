import React, {useState} from 'react';
import './Contact.scss';
import Card from './Card';
import emailjs from 'emailjs-com';

export default function Contact() {

    // for emailjs
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const USER_ID = process.env.REACT_APP_USER_ID;

    const [info, setInfo] = useState({
        from_name: '',
        reply_to: '',
        message: '',
    });

    const nameHandler = (e) => {
        setInfo({
            ...info,
            from_name: e.target.value
        });
    }

    const emailHandler = (e) => {
        setInfo({
            ...info,
            reply_to: e.target.value
        });
    }

    const messageHandler = (e) => {
        setInfo({
            ...info,
            message: e.target.value
        });
    }

    function submitForm(e) {
        e.preventDefault();
        emailjs.send(SERVICE_ID, TEMPLATE_ID, info, USER_ID).then(
            (response) => {
                alert('Thank You!, I Will Get Back To You As Soon As Possible');
            },
            (err) => {
                alert('Ugh!, I Guess Something Went Wrong');
            }
        );
        setInfo({
            from_name: '',
            reply_to: '',
            message: ''
        });
    }

    return (
        <div className='parent-div-contact'>
            <Card className="contact-card">
                <h1>Get In Touch!</h1>
                <div className='primary-inputs'>
                    <input placeholder='Your Name' value={info.from_name} type={'text'} onChange={nameHandler}/>
                    <input type={'email'} placeholder='Your Email' value={info.reply_to} onChange={emailHandler}/>
                </div>
                <div className='textarea-input'>
                    <textarea placeholder='Your Message' value={info.message} onChange={messageHandler}/>
                </div>
                <div className='buttons'>
                    <button onClick={submitForm}>Send</button>
                </div>
            </Card>
        </div>
    )
}
