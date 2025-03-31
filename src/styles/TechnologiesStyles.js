import styled from 'styled-components';

export const TechSection = styled.section`
  min-height: 100vh;
  padding: 0rem 2rem;
  background-color: var(--black);
  color: var(--platinum);
  text-align: center;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    margin-top: 6rem;
    color: var(--gold);
  }

  p {
    margin-bottom: 5rem;
    font-size: 1.7rem;

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

export const TechImage = styled.img`
  max-width: 300px;
  max-height: 250px;
  width: 100%;
  height: auto;
  margin: 2rem auto 4rem;
  display: block;
  border-radius: 1rem;
  border: 3px solid var(--platinum);

  @media (min-width: 768px) {
    max-width: 400px;
  }
`;
