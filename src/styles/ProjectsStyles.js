import styled from "styled-components";

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
    background: none;
    padding: 0.5rem;
    border-radius: 50%;
}
`;

export { ProjectSection, ProjectsGrid, ProjectContainer, TechList }



