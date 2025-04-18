import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = styled.nav`
display: flex;
justify-content: space-around;
align-items: center;
padding: 0;
background-color: var(--gold);
position: sticky;
top: 0;
height: 70px;
z-index: 100;

@media (max-width: 768px){
    flex-direction: column;
    height: auto;
}
`

const NavItem = styled(NavLink)`
display: flex;
flex: 1;
align-items: center;
justify-content: center;
text-align: center;
height: 100%;
color: var(--black);
font-weight: bold;
text-decoration: none;
font-size: 1.25rem;
position: relative;
transition: background-color 0.7s ease, color 0.7s ease;

&.active {
    color: var(--gold);
    background-color: var(--black);
}

&:hover {
    background-color: black;
    color: var(--platinum);
}

@media (max-width: 768px) {
    flex: none;
    width: 100%;
    height: 50px;
    font-size: 0.9rem;
}
`;

const BurgerToggle = styled.div`
margin: 0.3rem auto 0.1rem auto;
cursor: pointer;
z-index: 200;
    svg {
        width: 1.5rem;
        height: 1.5rem;
        color: black;
    }
`;

export {
    Nav,
    NavItem,
    BurgerToggle
};