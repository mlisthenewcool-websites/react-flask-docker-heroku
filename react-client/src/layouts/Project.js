import React from "react";
import PropTypes from 'prop-types';
// import {Link} from "react-router-dom";

export const TheProject = ({data}) => (
    <div className="project-container">
        <article>
            <header>
                <h3><a href={data.link}>{data.title}</a></h3>
                <time>{data.date}</time>
            </header>
            <a href={data.link}>
                <img src={data.image} alt={data.title} />
            </a>
            <div>
                <p>{data.desc}</p>
            </div>
        </article>
    </div>
);

TheProject.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
    }).isRequired
};