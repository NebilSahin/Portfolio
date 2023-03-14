import React from "react";
import lang from "../../lang/en.json";
import projectImg from "../../assets/digitalfuture-website.png";

export default function DigitalFuture() {
    //render content
    return (
        <div className="project">
            <div
                className="project-img laptop"
                message="Built with custome elements!"
                data-aos="fade-right"
                data-aos-delay="400"
            >
                <img src={projectImg} alt="project"></img>
            </div>
            <div
                className="project-info"
                data-aos="fade-left"
                data-aos-delay="400"
            >
                <h2 data-aos="fade-up" data-aos-delay="400">
                    {lang.digitalfuture}
                </h2>
                <p data-aos="fade-up" data-aos-delay="600">
                    {lang.workProject}
                </p>
                <p data-aos="fade-up" data-aos-delay="600">
                    {lang.digitalfutureDescription}
                </p>
                <h3 data-aos="fade-up" data-aos-delay="400">
                    {lang.techStack}
                </h3>
                <div className="icons row" data-aos="fade-up" data-aos-delay="600">
                    <div className="pale-blue skill-icon" message="WordPress">
                        <div>
                            <img src="https://www.svgrepo.com/show/475696/wordpress-color.svg" alt="wordpress"></img>
                        </div>
                    </div>
                    <div className="orange skill-icon" message="HTML">
                        <div>
                            <img src="https://www.svgrepo.com/show/452228/html-5.svg" alt="html"></img>
                        </div>
                    </div>
                    <div className="blue skill-icon" message="CSS">
                        <div>
                            <img src="https://www.svgrepo.com/show/452185/css-3.svg" alt="css"></img>
                        </div>
                    </div>
                    <div className="yellow skill-icon" message="JavaScript">
                        <div>
                            <img src="https://www.svgrepo.com/show/349419/javascript.svg" alt="javascript"></img>
                        </div>
                    </div>
                    <div className="pale-purple skill-icon" message="PHP">
                        <div>
                            <img src="https://www.svgrepo.com/show/452088/php.svg" alt="php"></img>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="600">
                    <a
                        className="button secondary"
                        href="https://digitalfuture.sa/en/"
                        message="Check it out"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {lang.visit}
                    </a>
                </div>
            </div>
        </div>
    );
}
