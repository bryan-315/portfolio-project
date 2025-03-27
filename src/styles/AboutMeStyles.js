import styled from "styled-components";


const AbtMeSect = styled.section`
min-height: 80vh;
padding: 4rem 2rem;
background-color: var(--violet); /* contrast from hero's black */
color: var(--platinum);
display: flex;
align-items: center;
justify-content: center;
text-align: center;
flex-wrap: wrap;
gap: 3rem;
@media (max-width: 768px) {
    flex-direction: column;
    padding: 3rem 1.5rem;
}
`

const AbtMeText = styled.div`
flex: 1;
max-width: 600px;
text-align: left;

h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: var(--gold);
}

p {
    font-size: 1.1rem;
    line-height: 1.6;
}

@media (max-width: 768px) {
    text-align: center;

    h2 {
    font-size: 1.75rem;
    }

    p {
    font-size: 1rem;
    }
}
`;


const AbtMeImg = styled.img`
  flex: 1;
  max-width: 300px;
  width: 100%;
  height: auto;
  border-radius: 1rem;
  border: 3px solid var(--platinum);

  @media (max-width: 768px) {
    max-width: 200px;
    max-height: 100px;
  }
`;






export {
    AbtMeSect,
    AbtMeText,
    AbtMeImg
}