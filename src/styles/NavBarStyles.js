import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = styled.nav`
display: flex;
justify-content: space-around;
align-items: center;
padding: 0;
background-color: var(--dark-blue);
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
color: var(--platinum);
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
    background-color: var(--black);
}

@media (max-width: 768px) {
    flex: none;
    width: 100%;
    height: 50px;
    font-size: 0.9rem;
}
`;

export {
    Nav,
    NavItem
};