import React, { useEffect } from "react";
import "./styles/App.scss";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Content from "./components/Content";
import MouseBubble from "./components/MouseBubble";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
    //effects after rendering
    useEffect(() => {
        AOS.init({
            delay: 200,
            duration: 400,
            easing: "ease-out",
            once: true,
            mirror: false,
            anchorPlacement: 'bottom-bottom',
        });
        setTimeout(function(){
            let splash = document.querySelector('.splash-container');
            let body = document.querySelector('body');
            body.classList.add('done');
            splash.classList.add('done');
        }, 1500)
    }, []);

    //render content
    return (
        <div className="App">
            <MouseBubble />
            <Navbar />
            <Header />
            <Content />
        </div>
    );
}

export default App;
