import { FaJsSquare, FaHtml5, FaCss3Alt } from "react-icons/fa";

import project1img from '../assets/webdevConcordiaProject1Img.png'
import project1gif from '../assets/burgerzoomgif.gif'
import pendingProject from '../assets/projectPlaceholder.jpg'
export const projectsArr = [

    {
        title: 'Burger Zoomer 2',
        description: 'Small, fast-paced browser game made as a project while learning DOM manipulation with javascript.',
        image: project1img,
        gif: project1gif,
        techList: [FaHtml5, FaCss3Alt, FaJsSquare],
        liveLink: null,
        github: null,
        status: 'complete'
    },
    {
        title: 'Coming Soon...',
        description: 'New project under construction!',
        image: pendingProject,
        gif: pendingProject,
        techList: [],
        liveLink: null,
        github: null,
        status: 'in progress'
    }
]