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

  p {
    margin-bottom: 5rem;

  }
`;

export const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2rem;
  justify-items: center;
`;

export const TechItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;

  p {
    margin-top: 0.5rem;
    font-weight: bold;
  }

  span {
    position: absolute;
    bottom: 100%;
    transform: translateY(-0.5rem);
    background: none;
    color: ${({ $color }) => $color || 'var(--gold)'}; 
    padding: 0.3rem 0.5rem;
    border-radius: 4px;
    font-size: 0.75rem;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease;
  }

  &:hover span {
    opacity: 1;
  }


  &:hover {
    transform: scale(1.1);
    filter: brightness(1.2);
  }

  

`;
