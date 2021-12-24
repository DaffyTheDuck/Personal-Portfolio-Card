import React, {useEffect, useRef} from 'react';
import './About.scss';
import { init } from 'ityped';

export default function Experience() {

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
        <div className='exp_div'>
            <h1><span ref={textRef}></span></h1>
        </div>
    )
}
