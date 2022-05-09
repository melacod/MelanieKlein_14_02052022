import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreateEmployee from './pages/CreateEmployee'
import CurrentEmployees from './pages/CurrentEmployees'

/**
 * Application routes
 * @component
 * @category Main
 */
const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CreateEmployee />} />
                <Route path="/employee-list" element={<CurrentEmployees />} />
            </Routes>
        </Router>
    )
}

export default AppRouter
