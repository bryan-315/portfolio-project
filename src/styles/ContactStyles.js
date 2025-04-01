import styled from "styled-components";

export const ContactSection = styled.section`
padding: 1rem 2rem 3rem;
background-color: var(--dark-blue);
color: var(--platinum);
text-align: center;
width: 80%;
max-width: 200rem;
margin: 4rem auto;
border-radius: 1rem;
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);

    h1 {
    font-size: 2.8rem;
    color: var(--gold);
    margin-bottom: 1rem;
    }

    p {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    }

    a {
    color: var(--gold);
    text-decoration: underline;
    transition: color 0.2s ease;
    font-size: 1.3rem;
    word-break: break-word;
    overflow-wrap: break-word;

        &:hover {
            color: var(--lavender);
        }
    }
`;

export const ContactInfo = styled.div`
margin-top: 2rem;
display: flex;
flex-wrap: wrap;
justify-content: center;
flex-direction: column;
gap: 2rem;
align-items: center;
font-size: 1rem;

    p, a {
        margin: 0;
        min-width: 120px;
    }

    @media (max-width: 768px) {
    font-size: 0.95rem;
    }
`;