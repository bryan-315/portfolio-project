import styled from "styled-components"
import { FaJsSquare, FaHtml5, FaCss3Alt } from "react-icons/fa";

//placeholder imgs:
import bryanPic from '../assets/bryanArt1.jpg'
import bigBrainPic from '../assets/bigBrain.jpg'
const projectsArr = [

    {
        title: 'Burger Zoomer 2',
        description: 'Small, fast-paced browser game made as a project while learning DOM manipulation with javascript.',
        image: bryanPic,
        gif: bigBrainPic,
        techList: [FaHtml5, FaCss3Alt, FaJsSquare],
        //placeholders for now
        liveLink: 'https://www.amazon.ca/',
        github: 'https://github.com/',
        status: 'complete'
    },
    {
        title: 'Coming Soon...',
        description: 'New project under construction!',
        image: bigBrainPic,
        gif: bryanPic,
        techList: [],
        liveLink: null,
        github: null,
        status: 'in progress'
    }
]

const Projects = () => {

    return (  
        <ProjectSection>
        <h1>Bryan's Amazing Projects</h1>
        <ProjectsGrid>
            {projectsArr.map((project ,index) => {
                return (
                    <ProjectContainer key={index}>                    
                        <h2>{project.title}</h2>
                        <img 
                        src={project.image} 
                        alt="image of one of Bryna's projects" 
                        onMouseEnter={(ev) => ev.currentTarget.src = project.gif}
                        onMouseLeave={(ev) => ev.currentTarget.src = project.image}
                        />
                        <p>{project.description}</p>
                        <p>Status: {project.status}</p>
                        <TechList>
                            {project.techList.map((icon, index) => {
                                const Icon = icon
                                return (
                                <span key={index}>
                                    <Icon size={20}/>
                                </span>
                                )
                        })}
                        </TechList>
                        {project.liveLink && <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Link</a>}
                        {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">Github Link</a>}
                    </ProjectContainer>
                )
                })}
            </ProjectsGrid>
        </ProjectSection>
    )
}

const ProjectSection = styled.section`
padding: 4rem 2rem;
background-color: var(--black);
color: var(--platinum);
text-align: center;

  h1 {
    color: var(--gold);
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }

`;

const ProjectsGrid = styled.div`
display: grid;
grid-template-columns: 1fr; /* default 1 column (mobile) */
gap: 2rem;
margin-top: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on medium+ screens */
  }
`;

const ProjectContainer = styled.div`
background-color: var(--violet);
padding: 2rem;
border-radius: 1rem;
margin-bottom: 3rem;
max-width: 800px;
margin-left: auto;
margin-right: auto;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  h2 {
    color: var(--gold);
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }

  a {
    display: inline-block;
    margin-right: 1rem;
    margin-top: 1rem;
    color: var(--gold);
    text-decoration: underline;

    &:hover {
      color: var(--platinum);
    }
  }

  img {
    width: 100%;
    max-width: 20rem;
    aspect-ratio: 4 / 3; /* Keeps height-to-width ratio consistent */
    border-radius: 1rem;
    object-fit: cover;
    border: 3px solid var(--platinum);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }
  }

`;

const TechList = styled.span`
display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none
    padding: 0.5rem;
    border-radius: 50%;
  }
`;

export default Projects