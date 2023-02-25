import React, { useEffect } from "react";
import lang from "../lang/en.json";

export default function Skills() {
    //effects after rendering
    useEffect(() => {}, []);

    return (
        <div id="skills" className="section-container">
            <h1 data-aos="fade-up" data-aos-delay="200">
                {lang.mySkills}
                <span className="title-line primary"></span>
            </h1>
            <h3 className="sub-title" data-aos="fade-up" data-aos-delay="300">
                {lang.webTitle}
                <span className="sub-line"></span>
            </h3>
            <div className="icons row" data-aos="fade-up" data-aos-delay="400">
                <div className="orange skill-icon" message="HTML">
                    <div>
                        <img src="https://www.svgrepo.com/show/452228/html-5.svg"></img>
                    </div>
                </div>
                <div className="blue skill-icon" message="CSS">
                    <div>
                        <img src="https://www.svgrepo.com/show/452185/css-3.svg"></img>
                    </div>
                </div>
                <div className="pink skill-icon" message="SASS">
                    <div>
                        <img src="https://www.svgrepo.com/show/354310/sass.svg"></img>
                    </div>
                </div>
                <div className="yellow skill-icon" message="JavaScript">
                    <div>
                        <img src="https://www.svgrepo.com/show/349419/javascript.svg"></img>
                    </div>
                </div>
                <div className="light-blue skill-icon" message="ReactJS">
                    <div>
                        <img src="https://www.svgrepo.com/show/452092/react.svg"></img>
                    </div>
                </div>
                <div className="pale-orange-2 skill-icon" message="Laravel">
                    <div>
                        <img src="https://www.svgrepo.com/show/303379/laravel-logo.svg"></img>
                    </div>
                </div>
                <div className="pale-green skill-icon" message="VueJS">
                    <div>
                        <img src="https://www.svgrepo.com/show/452130/vue.svg"></img>
                    </div>
                </div>
                <div className="pale-purple skill-icon" message="PHP">
                    <div>
                        <img src="https://www.svgrepo.com/show/452088/php.svg"></img>
                    </div>
                </div>
                <div className="pale-blue skill-icon" message="WordPress">
                    <div>
                        <img src="https://www.svgrepo.com/show/475696/wordpress-color.svg"></img>
                    </div>
                </div>
            </div>
            <h3 className="sub-title" data-aos="fade-up" data-aos-delay="300">
                {lang.mobileTitle}
                <span className="sub-line"></span>
            </h3>
            <div className="icons row" data-aos="fade-up" data-aos-delay="400">
                <div className="blue skill-icon" message="Flutter">
                    <div>
                        <img src="https://www.svgrepo.com/show/373604/flutter.svg"></img>
                    </div>
                </div>
                <div className="light-blue skill-icon" message="React Native">
                    <div>
                        <img src="https://www.svgrepo.com/show/452092/react.svg"></img>
                    </div>
                </div>
            </div>
            <h3 className="sub-title" data-aos="fade-up" data-aos-delay="300">
                {lang.designTitle}
                <span className="sub-line"></span>
            </h3>
            <div className="icons row" data-aos="fade-up" data-aos-delay="400">
                <div
                    className="dark-blue-2 skill-icon"
                    message="Adobe Photoshop"
                >
                    <div>
                        <img src="https://www.svgrepo.com/show/452149/adobe-photoshop.svg"></img>
                    </div>
                </div>
                <div
                    className="dark-yellow skill-icon"
                    message="Adobe Illustrator"
                >
                    <div>
                        <img src="https://www.svgrepo.com/show/452147/adobe-illustrator.svg"></img>
                    </div>
                </div>
                <div className="purple skill-icon" message="Adobe Premiere">
                    <div>
                        <img src="https://www.svgrepo.com/show/452150/adobe-premiere.svg"></img>
                    </div>
                </div>
            </div>
            <h3 className="sub-title" data-aos="fade-up" data-aos-delay="300">
                {lang.otherTitle}
                <span className="sub-line"></span>
            </h3>
            <div className="icons row" data-aos="fade-up" data-aos-delay="400">
                <div className="pale-orange-2 skill-icon" message="Github">
                    <div>
                        <img src="https://www.svgrepo.com/show/452210/git.svg"></img>
                    </div>
                </div>
                <div className="orange skill-icon" message="Linux/Ubuntu">
                    <div>
                        <img src="https://www.svgrepo.com/show/452122/ubuntu.svg"></img>
                    </div>
                </div>
                <div className="yellow skill-icon" message="Firebase">
                    <div>
                        <img src="https://www.svgrepo.com/show/373595/firebase.svg"></img>
                    </div>
                </div>
                <div className="dark-red skill-icon" message="Apache">
                    <div>
                        <img src="https://www.svgrepo.com/show/353400/apache.svg"></img>
                    </div>
                </div>
                <div className="green skill-icon" message="Nginx">
                    <div>
                        <img src="https://www.svgrepo.com/show/373924/nginx.svg"></img>
                    </div>
                </div>
                <div className="yellow skill-icon" message="Python">
                    <div>
                        <img src="https://www.svgrepo.com/show/452091/python.svg"></img>
                    </div>
                </div>
                <div className="pale-orange skill-icon" message="Java">
                    <div>
                        <img src="https://www.svgrepo.com/show/452234/java.svg"></img>
                    </div>
                </div>
                <div className="dark-blue skill-icon" message="MySQL">
                    <div>
                        <img src="https://www.svgrepo.com/show/373848/mysql.svg"></img>
                    </div>
                </div>
                <div className="gray skill-icon" message="Flask">
                    <div>
                        <img src="https://www.svgrepo.com/show/473611/flask.svg"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}
