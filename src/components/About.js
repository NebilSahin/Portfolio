import React, { useEffect } from "react";
import lang from "../lang/en.json";
import cv from "../assets/Nebil Sahin CV 2023.pdf";

export default function About() {
    //render content
    return (
        <div id="about" className="section-container primary">
            <h1 data-aos="fade-up" data-aos-delay="200">
                {lang.aboutTitle}
                <span className="title-line"></span>
            </h1>
            <h3 data-aos="fade-up" data-aos-delay="400">
                {lang.aboutSubtitle}
            </h3>
            <p className="section-text" data-aos="fade-up" data-aos-delay="600">
                {lang.aboutText}
            </p>
            <div data-aos="fade-up" data-aos-delay="800">
                <a
                    className="button primary"
                    href={cv}
                    message="Has more details"
                    target="_blank"
                >
                    {lang.resume}
                </a>
                <a
                    className="button primary"
                    id="about-contact-link"
                    href="#"
                    message="Let's get in touch"
                >
                    {lang.contact}
                </a>
            </div>
        </div>
    );
}
