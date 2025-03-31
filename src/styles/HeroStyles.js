import styled from "styled-components";

const HeroSection = styled.section`
height: 100vh;
background-color: var(--black);
color: var(--gold);
display: flex;
flex-direction: column;
justify-content: flex-start;
padding: 10vh 1vw ;
align-items: center;
text-align: center;
`;

const HeroTitle = styled.h1`
font-size: 3rem;
`;

const HeroSubtitle = styled.p`
font-size: 1.5rem;
color: var(--light-blue);
`;  

const ScrollDown = styled.div`
position: absolute;
bottom: 40px;
font-size: 1rem;
color: var(--platinum);
animation: bounce 2s infinite;

@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(5px); }
}

    @media (max-width: 768px) {
        display: none;
    }
`;

const HeroImage = styled.img`
width: 175px;
height: 150px;
border-radius: 50%;
object-fit: cover;
border: 3px solid var(--platinum);
margin-bottom: 5px;

@media (min-width: 768px) {
    width: 25rem;
    height: 21rem;
}
`;


export {
    HeroSection,
    HeroTitle,
    HeroSubtitle,
    ScrollDown,
    HeroImage
};