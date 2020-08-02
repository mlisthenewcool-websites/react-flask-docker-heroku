// visit doc at https://github.com/icd2k3/react-router-breadcrumbs-hoc

import React from "react";
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';

import { routes } from "../data/routes";
import {Link} from "react-router-dom";

const Breadcrumbs = ({breadcrumbs}) => (
    <nav className="breadcrumb has-arrow-separator is-centered">
        <ul>
            {breadcrumbs.map(({match, breadcrumb}) => (
                <li key={match.url}><Link to={match.url}>{breadcrumb}</Link></li>
            ))}
        </ul>
    </nav>
)

export default withBreadcrumbs(routes, {
    excludePaths: ['/']
})(Breadcrumbs);
