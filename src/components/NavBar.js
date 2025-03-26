import { NavLink } from "react-router-dom";
import {Nav, NavItem} from '../styles/NavBarStyles';
import { AiFillHome } from 'react-icons/ai';
import { MdDeveloperBoard } from "react-icons/md";
import { VscDebug } from "react-icons/vsc";
import { BsMailbox2 } from "react-icons/bs";

const NavBar = () => {

    return (
        <Nav>
            <NavItem to='/'>
                Home
                <AiFillHome style={{ marginLeft: '0.5rem' }} />
            </NavItem>
            <NavItem to='/technologies'>
                Technologies
                <MdDeveloperBoard style={{ marginLeft: '0.5rem' }} />
            </NavItem>
            <NavItem to={'/projects'}>
                Projects
                <VscDebug style={{ marginLeft: '0.5rem' }} />
            </NavItem>
            <NavItem to={'/contact'}>
                Contact
                <BsMailbox2 style={{ marginLeft: '0.5rem' }} />
            </NavItem>
        </Nav>
    )
}

export default NavBar