import React from 'react';
import { FaLinkedin, FaEnvelope, FaGithub, FaKaggle } from 'react-icons/fa';

export const links = [
    {
        link: "https://www.linkedin.com/in/hippolyte-debernardi/",
        label: "LinkedIn",
        icon: () => <span><FaLinkedin /></span>
    },

    {
        link: "mailto:contact@hippolyte-debernardi.com",
        label: "Email",
        icon: () => <span><FaEnvelope /></span>
    },

    {
        link: "https://github.com/ml-is-the-new-cool",
        label: "GitHub",
        icon: () => <span><FaGithub /></span>
    },

    {
        link: "https://www.kaggle.com/mlisthenewcool",
        label: "Kaggle",
        icon: () => <span><FaKaggle /></span>
    }
];
