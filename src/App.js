import React, { useEffect, useRef } from 'react';
import './styles/App.scss';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Content from './components/Content';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SmoothScrollAnimate } from './scripts/AppScripts';
import Scrollbar from 'smooth-scrollbar';

function App() {
  //effects after rendering
  useEffect(() => {
    Scrollbar.init(document.querySelector('.app-container'));

    AOS.init({
      delay: 200,
      duration: 400,
      easing: 'ease-out',
      once: true,
      mirror: true,
      anchorPlacement: 'bottom-bottom',
      useClassNames: false,
    });

    setTimeout(function () {
      let splash = document.querySelector('.splash-container');
      let body = document.querySelector('body');
      body.classList.add('done');
      splash.classList.add('done');
    }, 1500);

    SmoothScrollAnimate();
  }, []);

  //render content
  return (
    <div className="app-container">
      <div className="app">
        <Navbar />
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
