import React, { useEffect } from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

export default function Content() {
    //effects after rendering
    useEffect(() => {

    }, []);

    return (
        <div className="content-container">
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
    );
}