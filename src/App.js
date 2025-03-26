
//react import
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';


//components import
import Home from './components/Home/Home';
import NavBar from './components/NavBar';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Contact from './components/Contact';
import MissingRoute from './components/MissingRoute';


const routesArray = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/technologies',
        element: <Technologies />
    },
    {
        path: '/projects',
        element: <Projects />
    },
    {
        path: '/Contact',
        element: <Contact />
    }
    
]

const App = ()=> {
    return (
        <Router>
            <NavBar />
            <Routes>
                {routesArray.map(({ path, element }, index) => 
                <Route path={path} element={element} key={index} />)}
                <Route path='*' element={<MissingRoute />} />
            </Routes>
        </Router>
    )
}

export default App;