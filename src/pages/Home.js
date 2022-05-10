import Footer from '../components/Footer'
import Header from '../components/Header'

/**
 * Home page
 * @component
 * @category Common
 */
const Home = () => {
    return (
        <>
            <Header />
            <main>
                <h1>Welcome to HRNet application !</h1>
                <p>
                    You can see the list of all employees and create new
                    employee.
                </p>
            </main>
            <Footer />
        </>
    )
}

export default Home
