import React from "react";
import Main from "../layouts/Main";

import { projects } from "../data/projects";
import { TheProject } from "../layouts/Project";

class Projects extends React.Component {
    render() {
        return (
            <Main>
                {projects.map((projet) => (
                    <TheProject key={projet.title} data={projet} />
                ))}
            </Main>
        );
    }
}

export default Projects;