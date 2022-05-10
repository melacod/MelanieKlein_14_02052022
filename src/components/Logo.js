/**
 * Application logo
 * @component
 * @category Common
 */
const Logo = () => {
    return (
        <div className="logo">
            <img
                alt="WealthHealth logo"
                src={process.env.PUBLIC_URL + '/logo.jpg'}
            />
        </div>
    )
}

export default Logo
