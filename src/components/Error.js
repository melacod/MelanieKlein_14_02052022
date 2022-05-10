import './Error.css'

/**
 * Application error message
 * @component
 * @category Common
 */
const Error = ({ error }) => {
    return <div className="error">{error}</div>
}

export default Error
