import { configureStore } from '@reduxjs/toolkit'
import employeesReducer from './EmployeesReducer'

/**
 * Redux store
 * @kind constant
 * @category Store
 */
const store = configureStore({
    reducer: {
        employees: employeesReducer,
    },
})

// we log the state in the console each time it is modified
store.subscribe(() => {
    console.log('New state', store.getState())
})

export default store
