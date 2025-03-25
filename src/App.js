
import Hero from "./components/Hero";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom'


const App = ()=> {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Hero />}/>
            </Routes>
        </Router>
    )
}

export default App;