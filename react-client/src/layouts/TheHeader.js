import React from "react";
import {Link} from "react-router-dom";

// import Breadcrumbs from "./Breadcrumbs";

export const TheHeader = () => (
    <header>
        <div className="left">
            <nav className="is-centered">
                <Link to="/">Hippolyte L. Debernardi</Link>
            </nav>
        </div>

        <div className="right">

        </div>
    </header>
);
