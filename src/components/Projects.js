import { ProjectSection, ProjectsGrid, ProjectContainer, TechList } from '../styles/ProjectsStyles'

import { projectsArr } from '../data/projects'


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


export default Projects