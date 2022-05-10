import './Toolbar.css'
import { NavLink } from 'react-router-dom'

/**
 * Application toolbar with all links
 * @component
 * @category Common
 */
const Toolbar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/create-employee">
                            Create a new employee
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/list-employees">List employees</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Toolbar
