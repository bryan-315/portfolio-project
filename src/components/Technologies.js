import { TechSection, TechGrid, TechItem } from '../styles/TechnologiesStyles';
import { technologiesArr } from '../data/technologies';


const Technologies = () => {

    return (
        <TechSection>
            <h1>My Frontend and Backend Tools</h1>
            <TechGrid>
                {technologiesArr.map((tech) => {
                    const Icon = tech.logo
                    return (
                        <TechItem key={tech.name}>
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