import React from "react";
import lang from "../../lang/en.json";
import projectImg from "../../assets/manga-arabia.png";

export default function MangaArabia() {
    //render content
    return (
        <div className="project">
            <div
                className="project-img laptop"
                message="What do you think of my art?"
                data-aos="fade-right"
                data-aos-delay="400"
            >
                <img src={projectImg}></img>
            </div>
            <div
                className="project-info"
                data-aos="fade-left"
                data-aos-delay="400"
            >
                <h2 data-aos="fade-up" data-aos-delay="400">
                    {lang.mangaArabia}
                </h2>
                <p data-aos="fade-up" data-aos-delay="600">
                    {lang.freelanceProject}
                </p>
                <p data-aos="fade-up" data-aos-delay="600">
                    {lang.mangaArabiaDescription}
                </p>
                <h3 data-aos="fade-up" data-aos-delay="400">
                    {lang.toolsUsed}
                </h3>
                <div className="icons row" data-aos="fade-up" data-aos-delay="600">
                    <div
                        className="dark-blue-2 skill-icon"
                        message="Adobe Photoshop"
                    >
                        <div>
                            <img src="https://www.svgrepo.com/show/452149/adobe-photoshop.svg"></img>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="600">
                    <a
                        className="button secondary"
                        href="https://www.mangaarabia.com"
                        message="You can checkout the story on their app!"
                        target="_blank"
                    >
                        {lang.visit}
                    </a>
                </div>
            </div>
        </div>
    );
}
