import React, { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import lang from "../lang/en.json";
import profile from "../assets/Nebil-Sahin-Photo.jpg";
import { MenuHover, NavbarWidth, LinkClick } from "../scripts/NavbarScripts.js";

export default function Navbar() {
    //effects after rendering
    useEffect(() => {
        MenuHover();
        NavbarWidth();
        LinkClick();
    }, []);

    //render content
    return (
        <div
            className="nav-container"
            data-aos="fade-down"
            data-aos-delay="200"
        >
            <div className="nav-logo">
                <img src={profile}></img>
                <a href="/">{lang.nebilsahin}</a>
            </div>
            <div className="nav-links">
                <Nav
                    activeKey="/home"
                    // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                    <Nav.Item className="menu-button">
                        <span> {lang.menu}</span>
                        <div className="menu-line"></div>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="link link-top" href="/">
                            {lang.home}
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            id="about-link"
                            className="link link-bottom"
                            eventKey="link-2"
                        >
                            {lang.about}
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            id="skills-link"
                            className="link link-bottom"
                            eventKey="link-1"
                        >
                            {lang.skills}
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            id="projects-link"
                            className="link link-top"
                            eventKey="link-2"
                        >
                            {lang.projects}
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            id="contact-link"
                            className="link link-top"
                            eventKey="link-2"
                        >
                            {lang.contact}
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </div>
    );
}
