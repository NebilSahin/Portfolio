import React from "react";
import lang from "../lang/en.json";

export default function Splash() {
    //render content
    return (
        <div className="splash-container">
            <div>
                <div className="loader"></div>
                <div className="container-loading">
                    <span className="loading">{lang.loading}</span>
                </div>
            </div>
        </div>
    );
}
