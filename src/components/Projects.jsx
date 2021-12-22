import React, {useRef, useEffect} from 'react';
import './Projects.scss';
import { init } from 'ityped';

export default function Projects() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
        showCursor: true,
        strings: [
            "Coming Soon..",
            "Work In Progress!"
        ],
        backDelay: 2000,
        backSpeed: 40,
        cursorChar: '|',
        })
    }, []);

    return (
        <div className='project-div'>
            <h1><span ref={textRef}></span></h1>
        </div>
    );
}
