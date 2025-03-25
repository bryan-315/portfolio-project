import styled from 'styled-components';
import {
    HeroSection,
    HeroTitle,
    HeroSubtitle,
    ScrollDown,
    HeroImage
} from '../styles/HeroStyles';
import b from '../assets/bigBrain.jpg'

const Hero = () => {

    return (
        <HeroSection>
            <HeroImage src={b} alt='A picture of a very active brain'/>
            <HeroTitle>Welcome To The Bryan Zone</HeroTitle>
            <HeroSubtitle>Bryan Cruz: Full Stack Developper & Creative Genius</HeroSubtitle>
            <ScrollDown>↓ Scroll Down for More</ScrollDown>
        </HeroSection>
    );
}


export default Hero