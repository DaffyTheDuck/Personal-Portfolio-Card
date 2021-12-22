import React, {useState} from 'react';
import Card from './Card';
import './Contact.scss';

export default function Contact() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const emailHandler = (e) => {
        setEmail(e.target.value);
    }

    const messageHandler = (e) => {
        setMessage(e.target.value);
    }

    const messageSubmitHandler = () => {
        console.log(email, message);
        setEmail('');
        setMessage('');
    }

    return (
        <div className='parent-div'>
            <Card className='main-card'>
                <h1>Contact Me!</h1>
                <hr />
                <div className='message-div'>
                    <input 
                        placeholder='Email' 
                        type='email' 
                        className='message-div-input'
                        value={email}
                        onChange={emailHandler}
                    />
                    <textarea 
                        placeholder='Message' 
                        className='message-div-textarea'
                        value={message}
                        onChange={messageHandler}
                    />
                </div>
                <button 
                    className='submit-button'
                    onClick={messageSubmitHandler}
                >Send</button>
            </Card>
        </div>
    )
}
