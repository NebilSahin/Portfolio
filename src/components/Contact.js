import React from "react";
import lang from "../lang/en.json";
import artImg from "../assets/footer-character.png";
import { LinkedIn, EmailOutlined, GitHub } from "@mui/icons-material";

export default function About() {
    //render content
    return (
        <div id="contact" className="section-container primary last">
            {/* <div className="contact-col"> */}
                <h1 data-aos="fade-up" data-aos-delay="200">
                    {lang.contact}
                    <span className="title-line"></span>
                </h1>
                <h3 data-aos="fade-up" data-aos-delay="400">
                    {lang.contactSubtitle}
                </h3>
                <a
                    className="contact-icon"
                    href="mailto:nebil.s@hotmail.com"
                    message="Email Me"
                    target="_blank"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    <EmailOutlined sx={{ fontSize: 35 }} />
                    <span>{lang.email}</span>
                </a>
                <a
                    className="contact-icon"
                    href="https://www.linkedin.com/in/nebil-sahin-4634441b6/"
                    message="Checkout My Linkedin"
                    target="_blank"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    <LinkedIn sx={{ fontSize: 35 }} />
                    <span>{lang.linkedin}</span>
                </a>
                <a
                    className="contact-icon"
                    href="https://github.com/NebilSahin"
                    message="My Personal Projects"
                    target="_blank"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    <GitHub sx={{ fontSize: 35 }} />
                    <span>{lang.github}</span>
                </a>
            {/* </div> */}
            {/* <div className="contact-col">
                <img className="contact-character" src={artImg}></img>
            </div> */}
        </div>
    );
}
