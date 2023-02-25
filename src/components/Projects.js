import React, { useEffect } from "react";
import lang from "../lang/en.json";
import Luyten from "./projects/Luyten";
import DigitalFuture from "./projects/DigitalFuture";
import MangaArabia from "./projects/MangaArabia";
import AdvanceExperts from "./projects/AdvanceExperts";

export default function Content() {
    //effects after rendering
    useEffect(() => {}, []);

    //render content
    return (
        <div id="projects" className="section-container">
            <h1 data-aos="fade-up" data-aos-delay="200">
                {lang.projects}
                <span className="title-line primary"></span>
            </h1>
            <Luyten/>
            <DigitalFuture/>
            <AdvanceExperts/>
            <MangaArabia/>
        </div>
    );
}
