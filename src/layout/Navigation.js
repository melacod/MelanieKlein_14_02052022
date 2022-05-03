import { NavLink } from 'react-router-dom'

/**
 * Navigation bar
 * @component
 * @category Common
 */

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/index">Create Employee</NavLink>
                </li>
                <li>
                    <NavLink to="/employee-list">Current Employees</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
