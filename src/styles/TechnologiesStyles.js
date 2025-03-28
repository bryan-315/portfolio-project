import styled from 'styled-components';

export const TechSection = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  background-color: var(--black);
  color: var(--platinum);
  text-align: center;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: var(--gold);
  }
`;

export const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2rem;
  justify-items: center;
`;

export const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;

  p {
    margin-top: 0.5rem;
    font-weight: bold;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
