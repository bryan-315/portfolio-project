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
        logo: FaHtml5
    },
    {
        name: 'CSS3',
        color: '#264de4',
        logo: FaCss3Alt
    },
    {
        name: 'Javascript',
        color: '#f0db4f',
        logo: FaJsSquare
    },
    {
        name: 'React',
        color: '#61dafb',
        logo: FaReact
    },
    {
        name: 'Node.js',
        color: '68a063',
        logo: FaNodeJs
    },
    {
        name: 'Express',
        color: '#ffffff',
        logo: SiExpress
    },
    {
        name: 'Mongodb',
        color: '#4db33d',
        logo: SiMongodb
    },
]

export { technologiesArr }