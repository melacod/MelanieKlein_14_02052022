import { configureStore } from '@reduxjs/toolkit'
import employeeReducer from './features/employee'

/**
 * Redux store
 * @kind constant
 * @category Store
 */
const store = configureStore({
    reducer: {
        employee: employeeReducer,
    },
})

// we log the state in the console each time it is modified
store.subscribe(() => {
    console.log('New state', store.getState())
})

export default store
