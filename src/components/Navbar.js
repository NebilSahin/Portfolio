import React, { useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import lang from '../lang/en.json';
import profile from '../assets/profile.jpeg';
import { MenuHover } from '../scripts/NavbarScripts.js';

export default function Navbar() {
  //effects after rendering
  useEffect(() => {
    MenuHover();
  }, []);

  //render
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <img src={profile}></img>
        <a href="/">{lang.nebilsahin}</a>
      </div>
      <div className="nav-links">
        <Nav
          activeKey="/home"
          // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link className="link link-top" href="/home">
              {lang.home}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="link link-bottom" eventKey="link-1">
              {lang.skills}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="link link-top" eventKey="link-2">
              {lang.projects}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="link link-bottom" eventKey="link-2">
              {lang.about}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="link link-top" eventKey="link-2">
              {lang.contact}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="menu-button">
            <span> {lang.menu}</span>
            <div className="menu-line"></div>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
}
