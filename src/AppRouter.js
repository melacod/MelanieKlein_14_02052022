import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreateEmployee from './pages/CreateEmployee'
import ListEmployees from './pages/ListEmployees'
import Home from './pages/Home'

/**
 * Application routes
 * @component
 * @category Main
 */
const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create-employee" element={<CreateEmployee />} />
                <Route path="/list-employees" element={<ListEmployees />} />
            </Routes>
        </Router>
    )
}

export default AppRouter
