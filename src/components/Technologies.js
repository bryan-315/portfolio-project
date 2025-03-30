import { TechSection, TechGrid, TechItem, TechImage } from '../styles/TechnologiesStyles';
import { technologiesArr } from '../data/technologies';
import techPic from '../assets/funnyTechImg.jpg'

const Technologies = () => {

    return (
        <TechSection>
            <h1>My Frontend and Backend Tools</h1>
            <TechImage src={techPic} />
            <p>
                I use these tools regularly to build full-stack 
                web apps — from frontend interfaces to backend APIs 
                and databases. 
            </p>
            <p>
            And this stack is just the beginning — I'm 
            constantly growing and adding new tools to the mix.
            </p>

            <TechGrid>
                {technologiesArr.map((tech) => {
                    const Icon = tech.logo
                    return (
                        <TechItem 
                        key={tech.name} 
                        href={tech.link}
                        $color={tech.color}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Go to ${tech.name} documentation`}
                        >
                            <span >Learn more</span>
                            <Icon size={40} color={tech.color}/>
                            <p>{tech.name}</p>
                        </TechItem>
                    )
                })}
            </TechGrid>
        </TechSection>
    )
}

export default Technologies