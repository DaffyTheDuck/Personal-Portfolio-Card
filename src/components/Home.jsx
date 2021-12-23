import React, {useEffect, useRef} from 'react';
import './Home.scss';
import Card from './Card';
import myImage from '../assets/myImage.jpg';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { init } from 'ityped';

export default function App() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
        showCursor: true,
        strings: [
            "Student.",
            "Programmer.",
            "Gamer."
        ],
        backDelay: 2000,
        backSpeed: 40,
        cursorChar: '|',
        })
    }, []);

    return (
        <div className='main-div'>
            <div className='main-card'>
                <Card className='intro-div'>
                    <p className='main-heading'><span ref={textRef} className='dynamic-text'></span></p>
                    <input type="image" img src={myImage} alt='DaffyDuck' className='my-image'/>
                    <p>Hello!</p>
                    <p>I'm <span>Mihir Bhave</span></p>
                    <p>First Year <span>Computer Engineering Student,</span></p>
                    <p><span>Programmer,</span> Gamer and Tech Geek</p>
                    <div className='about-div'>
                        <a href="/projects" className='about-div-link'>Projects</a>
                        <a href="https://nbviewer.org/github/DaffyTheDuck/Personal-Portfolio-Card/blob/083cc1db390624868f78cfcb25df8d3a15dfe849/src/assets/resume.pdf" target={'_blank'} 
                            rel="noopener noreferrer"
                            className='about-div-link'>Resume</a>
                        <a href="/experience" className='about-div-link'>About</a>
                        <a href="/contact" className='about-div-link'>Contact</a>
                    </div>
                    <hr />
                    <div className='contact-links'>
                        <a href="https://github.com/DaffyTheDuck" target={"_blank"} rel="noopener noreferrer" className='contact-links-div'><FaGithub size={42}/></a>
                        <a href="https://www.linkedin.com/in/daffyduck/" target={"_blank"} rel="noopener noreferrer" className='contact-links-div'><FaLinkedinIn size={42}/></a>
                    </div>
                </Card>
            </div>
        </div>
    );
}
