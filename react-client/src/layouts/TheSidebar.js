import React from "react";
import {Link} from "react-router-dom";

// import routes and links
import {routes} from '../data/routes';
import {links} from "../data/links";

// in order to custom css of icons
import { IconContext } from 'react-icons';

export const TheSidebar = () => (
    <>
        <ul>
            {routes.map((l) => (
                <li key={l.breadcrumb}><Link to={l.path}>{l.breadcrumb}</Link></li>
            ))}
        </ul>

        <div className="btn-group">
            <IconContext.Provider value={{ className: 'react-icons' }}>
                {links.map((l) => (
                    <a key={l.label} href={l.link} rel="noopener noreferrer" target="_blank">
                        {l.icon()}
                    </a>
                ))}
            </IconContext.Provider>
            <p className="credits">©2020 Hippolyte L. Debernardi</p>
        </div>
    </>
)
