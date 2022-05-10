import { Link } from 'react-router-dom'

/**
 * Application logo
 * @component
 * @category Common
 */
const Logo = () => {
    return (
        <div className="logo">
            <Link to="/">
                <img
                    alt="WealthHealth logo"
                    src={process.env.PUBLIC_URL + '/logo.jpg'}
                />
            </Link>
        </div>
    )
}

export default Logo
