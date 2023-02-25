import React from "react";
import lang from "../../lang/en.json";
import projectImg from "../../assets/luyten-app-2.png";

export default function Luyten() {
    //render content
    return (
        <div className="project">
            <div
                className="project-img"
                message="Looks nice, what do you think?"
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
                    {lang.luytenTitle}
                </h2>
                <p data-aos="fade-up" data-aos-delay="600">
                    {lang.personalProject}
                </p>
                <p
                    data-aos="fade-up"
                    data-aos-delay="600"
                >
                    {lang.luytenDescription}
                </p>
                <h3 data-aos="fade-up" data-aos-delay="400">
                    {lang.techStack}
                </h3>
                <div className="icons row" data-aos="fade-up" data-aos-delay="600">
                    <div
                        className="light-blue skill-icon"
                        message="React Native"
                    >
                        <div>
                            <img src="https://www.svgrepo.com/show/452092/react.svg"></img>
                        </div>
                    </div>
                    <div className="pale-orange-2 skill-icon" message="Laravel">
                        <div>
                            <img src="https://www.svgrepo.com/show/303379/laravel-logo.svg"></img>
                        </div>
                    </div>
                    <div className="yellow skill-icon" message="JavaScript">
                        <div>
                            <img src="https://www.svgrepo.com/show/349419/javascript.svg"></img>
                        </div>
                    </div>
                    <div className="pale-purple skill-icon" message="PHP">
                        <div>
                            <img src="https://www.svgrepo.com/show/452088/php.svg"></img>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="600">
                    <a
                        className="button secondary"
                        href="https://github.com/NebilSahin/Luyten"
                        message="Check it out"
                        target="_blank"
                    >
                        {lang.githubPage}
                    </a>
                </div>
            </div>
        </div>
    );
}
