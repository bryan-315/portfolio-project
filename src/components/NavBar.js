import { useState } from 'react';
import { useEffect } from 'react';
import {Nav, NavItem, BurgerToggle } from '../styles/NavBarStyles';
import { AiFillHome as HomeIcon } from 'react-icons/ai';
import { MdDeveloperBoard as TechIcon } from "react-icons/md";
import { VscDebug } from "react-icons/vsc";
import { BsMailbox2 } from "react-icons/bs";
import { TiThMenuOutline as BurgerIcon } from "react-icons/ti";
import { IoMdCloseCircleOutline as CloseIcon } from "react-icons/io";

const NavBar = () => {
    
    const [ mobile, setMobile ] = useState()
    const [ burgerMenu, setBurgerMenu ] = useState(true)
    //icon click handler
    const toggleMenu = () => setBurgerMenu(!burgerMenu)
    useEffect(() => {
        //for mobile to desktop responsiveness
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setMobile(true)
            } else setMobile(false)
        }
        window.addEventListener('resize', handleResize)
        return (window.removeEventListener('resize', handleResize))
    }, [])
    
        return (
        <Nav>
            {mobile && burgerMenu && <BurgerToggle><BurgerIcon onClick={() => toggleMenu()}/> </BurgerToggle>}
            {mobile && !burgerMenu && <BurgerToggle><CloseIcon onClick={() => toggleMenu()}/></BurgerToggle>}
            {(!burgerMenu || !mobile) && <>
                <NavItem to='/'>
                    Home
                    <HomeIcon style={{ marginLeft: '0.5rem' }} />
                </NavItem>
                <NavItem to='/technologies'>
                    Technologies
                    <TechIcon style={{ marginLeft: '0.5rem' }} />
                </NavItem>
                <NavItem to={'/projects'}>
                    Projects
                    <VscDebug style={{ marginLeft: '0.5rem' }} />
                </NavItem>
                <NavItem to={'/contact'}>
                    Contact
                    <BsMailbox2 style={{ marginLeft: '0.5rem' }} />
                </NavItem>
            </>}
        </Nav>
        
    )
}

export default NavBar