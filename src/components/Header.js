import React, { useEffect } from "react";
import profile from "../assets/Nebil-Sahin-Photo.png";
import { HeaderHover, PhotoMoveHover } from "../scripts/HeaderScripts.js";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import lang from "../lang/en.json";

export default function Header() {
    //effects after rendering
    useEffect(() => {
        HeaderHover();
        PhotoMoveHover(".photo-container", ".profile-img", 10);
        PhotoMoveHover(".photo-container", ".profile-img-bg", 20);
    }, []);

    return (
        <div
            className="header-container"
            data-aos="fade-up"
            data-aos-delay="200"
        >
            <div className="img-container">
                <div className="photo-container">
                    <div className="blur">
                        <span>
                            <span className="header-title">
                                {lang.headerTitle}
                            </span>
                            <br />
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: lang.headerSubtitle,
                                }}
                            ></span>
                        </span>
                        <a
                            id="header-projects-link"
                            className="header-arrow"
                            href="#projects"
                            message="Some cool stuff"
                        >
                            <ArrowDownwardIcon className="icon animate" />
                            <span>{lang.exploreProjects}</span>
                        </a>
                    </div>
                    <div className="profile-container">
                        <div className="profile-img-bg">
                            <img className="profile-img" src={profile} alt="profile"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
