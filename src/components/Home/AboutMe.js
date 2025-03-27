import {
    AbtMeSect, 

    AbtMeText,
    AbtMeImg 
} from "../../styles/AboutMeStyles"

import aboutImage from '../../assets/bryanArt1.jpg'
const AboutMe = () => {

    return (
        <AbtMeSect>
            
            <AbtMeText>
            <h2>
                Quick Introduction
            </h2>
            <p>
            I'm a full-stack developer who focuses on writing clean, scalable code. 
            Whether I'm building new features or untangling legacy bugs, I prioritize delivering value — fast. 
            In a team setting, I communicate clearly and always aim to make my teammates' lives easier.
            </p>
            </AbtMeText>
            <AbtMeImg src={aboutImage} />
        </AbtMeSect>
    )
}

export default AboutMe