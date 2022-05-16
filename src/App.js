import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import AppRouter from './AppRouter'

/**
 * Main application component
 * @component
 * @category Main
 */
function App() {
    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <div className="app">
                <AppRouter />
            </div>
        </LocalizationProvider>
    )
}

export default App
