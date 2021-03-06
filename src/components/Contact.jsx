import React, {useState, Fragment} from 'react';
import './Contact.scss';
import Card from './Card';
import emailjs from 'emailjs-com';
import Modal from './Modal';

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
    const [name, setName] = useState('');
    const [success, setSuccess] = useState({
        showModal: false,
        title: '',
        message: '',
        success: false
    });
    const [failure, setFailure] = useState({
        showModal: false,
        title: '',
        message: '',
        failure: false
    });

    // close modal function
    const onClose = () => {
        setSuccess({
            showModal: false,
            title: '',
            message: '',
            success: false
        });
        setFailure({
            showModal: false,
            title: '',
            message: '',
            failure: false
        });
    };

    const nameHandler = (e) => {
        setInfo({
            ...info,
            from_name: e.target.value
        });
        setName(e.target.value);
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

    function submitForm() {
        // emailjs.send(SERVICE_ID, TEMPLATE_ID, info, USER_ID).then(
        //     (response) => {
        //         alert('Thank You!, I Will Get Back To You As Soon As Possible');
        //     },
        //     (err) => {
        //         alert('Ugh!, I Guess Something Went Wrong');
        //     }
        // );
        // setInfo({
        //     from_name: '',
        //     reply_to: '',
        //     message: ''
        // });
        if (info.from_name === '' || info.reply_to === '' || info.message === '') {
            setFailure({
                showModal: true,
                title: 'Oops!',
                message: 'Please Fill In All The Fields',
                failure: true
            });
        } else {
            emailjs.send(SERVICE_ID, TEMPLATE_ID, info, USER_ID).then(
                (response) => {
                    setSuccess({
                        showModal: true,
                        title: 'Thank You!',
                        message: 'I Will Get Back To You As Soon As Possible',
                        success: true
                    });
                    setInfo({
                        from_name: '',
                        reply_to: '',
                        message: ''
                    });
                },
                (err) => {
                    setFailure({
                        showModal: true,
                        title: 'Ugh!',
                        message: 'I Guess Something Went Wrong',
                        failure: true
                    });
                    setInfo({
                        from_name: '',
                        reply_to: '',
                        message: ''
                    });
                }
            );
        }
    }

    return (
        <Fragment>
            {
                success.success && <Modal title={success.title} 
                                        message={success.message} 
                                        onClose={onClose} 
                                        className="contact-modal" 
                                        name={name}
                                    />
            }
            {
                failure.failure && <Modal title={failure.title} 
                                        message={failure.message} 
                                        onClose={onClose} 
                                        className="contact-modal" 
                                        name={name}
                                    />
            }
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
        </Fragment>
    )
}
