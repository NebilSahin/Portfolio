import React, { useEffect } from "react";
import lang from "../lang/en.json";

export default function Splash() {
    //render content
    return (
        <div className="splash-container">
            <div>
                <div className="loader"></div>
                <div className="container-loading">
                    <span className="loading">Loading</span>
                </div>
            </div>
        </div>
    );
}
