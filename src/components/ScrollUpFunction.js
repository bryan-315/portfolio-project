import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollUp = () => {
    const scrollUpPaths = [
        '/technologies',
        '/projects',
        '/contact'
    ]

    const { pathname } = useLocation();
    useEffect(() => {
        if (scrollUpPaths.includes(pathname)){
        window.scrollTo({ top: 0 });
        console.log('scrolled')
        }
    },[pathname])
    return null;
}

export default ScrollUp;