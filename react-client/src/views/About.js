import React from "react";
import Main from "../layouts/Main";

const pdfFilePath = './hippolyte-debernardi-cv-french.pdf';

const About = () => (
    <Main>
        <p>
            Hello and welcome to my digital corner!
            I'm Hippolyte, don't make that face and call me Hippo.
        </p>

        <p>
            I am currently finishing my studies at the University of Aix-Marseille in
            France and at the École Centrale Marseille where I am in Master 2.
            I'm mostly interested in machine learning and artificial intelligence
            and particularly to projects applied to computer vision.
        </p>

        <p>
            With any luck, you might even see me build a "smart" application.
        </p>

        <p>
            Entrepreneur, I have the pleasure of founding the professional junior
            association of my university, JIM for Junior Informatique Marseille.
            We like to share our passion by helping those who solicit us.
        </p>

        <p>
            Using a virtual carrier pigeon to send me an email is the safest way for
            us to exchange.
        </p>

        <a href={pdfFilePath} download>Donwload résumé</a>
    </Main>
);

export default About;