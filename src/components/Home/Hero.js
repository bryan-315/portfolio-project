import styled from 'styled-components';
import {
    HeroSection,
    HeroTitle,
    HeroSubtitle,
    ScrollDown,
    HeroImage
} from '../../styles/HeroStyles';
import heroIcon from '../../assets/monkeybrain.jpg'

const Hero = () => {

    return (
        <HeroSection>
            <HeroImage src={heroIcon} alt='A picture of a very active brain'/>
            <HeroTitle>Welcome To The Bryan Zone</HeroTitle>
            <HeroSubtitle>Bryan Cruz: Web Developer & Creative Genius</HeroSubtitle>
            <ScrollDown>↓ Scroll Down for More</ScrollDown>
        </HeroSection>
    );
}


export default Hero