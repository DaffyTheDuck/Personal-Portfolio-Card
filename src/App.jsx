import React, {useEffect, useRef} from 'react';
import './App.scss';
import Card from './components/Card';
import image from './assets/myImage.jpg';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { init } from 'ityped'

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
          <img src={image} alt="My Image"/>
          <p>Hello!</p>
          <p>I'm <span>Mihir Bhave</span></p>
          <p>First Year <span>Computer Engineering Student</span></p>
          <p><span>Programmer,</span> Gamer and Tech Geek</p>
          <div className='about-div'>
            <a href="/#" className='about-div-link'>Projects</a>
            <a href="/#" className='about-div-link'>Resume</a>
            <a href="/#" className='about-div-link'>Blog</a>
            <a href="/#" className='about-div-link'>Contact</a>
          </div>
          <hr />
          <div className='contact-links'>
            <a href="https://github.com/DaffyTheDuck" target={"_blank"} className='contact-links-div'><FaGithub size={42}/></a>
            <a href="/#" className='contact-links-div'><FaLinkedinIn size={42}/></a>
          </div>
        </Card>
      </div>
    </div>
  );
}