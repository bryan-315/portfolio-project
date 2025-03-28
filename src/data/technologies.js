import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaNodeJs
} from 'react-icons/fa'

import { SiExpress, SiMongodb } from 'react-icons/si'

const technologiesArr = [
    {
        name:"HTML5",
        color:"#e44d26",
        logo: FaHtml5,
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
    },
    {
        name: 'CSS3',
        color: '#264de4',
        logo: FaCss3Alt,
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    },
    {
        name: 'Javascript',
        color: '#f0db4f',
        logo: FaJsSquare,
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
        name: 'React',
        color: '#61dafb',
        logo: FaReact,
        link: 'https://react.dev/'
    },
    {
        name: 'Node.js',
        color: '#68a063',
        logo: FaNodeJs,
        link: 'https://nodejs.org/en'
    },
    {
        name: 'Express',
        color: '#ffffff',
        logo: SiExpress,
        link: 'https://expressjs.com/'
    },
    {
        name: 'Mongodb',
        color: '#4db33d',
        logo: SiMongodb,
        link : 'https://www.mongodb.com/'
    },
]

export { technologiesArr }