import { createSlice } from '@reduxjs/toolkit'
import {
    addEmployeeToFirestore,
    getEmployeesFromFirestore,
} from '../backend/EmployeeBackendApi'
import { selectEmployees } from './Select'

/**
 * Employee initial state
 * @kind constant
 * @category EmployeeReducer
 */
const initialState = {
    process: {
        status: 'void',
        error: null,
    },
    list: [],
}

/**
 * Add employee action wrapper
 * @param employeeToAdd the employee to add
 * @category EmployeeReducer
 */
export function addEmployee(employeeToAdd) {
    return async (dispatch, getState) => {
        // get current status
        const status = selectEmployees(getState()).process.status

        if (status === 'pending') {
            // if request is currently running, we stop here (to avoid trigger same request thing multiple times)
            return
        }

        // we update status to fetching
        dispatch(actions.fetching())

        // Simulate data loading to show spinner
        //await new Promise((r) => setTimeout(r, 2 * 1000))

        try {
            // we call the backend API to add an employee
            await addEmployeeToFirestore(employeeToAdd)

            // we update status to resolved
            dispatch(actions.addEmployee())
        } catch (error) {
            // if any error is catch, we reject the request with the error message
            console.log(error)
            dispatch(
                actions.rejected({
                    error: error.message,
                })
            )
        }
    }
}

/**
 * Get all existing employees
 * @category EmployeeReducer
 */
export function getEmployees() {
    return async (dispatch, getState) => {
        // get current status
        const status = selectEmployees(getState()).process.status

        if (status === 'pending') {
            // if request is currently running, we stop here (to avoid trigger same request thing multiple times)
            return
        }

        // we update status to fetching
        dispatch(actions.fetching())

        // Simulate data loading to show spinner
        //await new Promise((r) => setTimeout(r, 2 * 1000))

        try {
            // we call the backend API to get all employees
            const employees = await getEmployeesFromFirestore()

            // we update status to resolved and put the list in state
            dispatch(
                actions.getEmployees({
                    employees: employees,
                })
            )
        } catch (error) {
            // if any error is catch, we reject the request with the error message
            console.log(error)
            dispatch(
                actions.rejected({
                    error: error.message,
                })
            )
        }
    }
}

/**
 * Employees state actions and reducers
 * @returns actions and reducers
 * @category UserState
 */
const { actions, reducer } = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        fetching: (draft) => {
            draft.process.status = 'pending'
            draft.process.error = null
            draft.list = []
        },

        rejected: (draft, action) => {
            draft.process.status = 'rejected'
            draft.process.error = action.payload.error
            draft.list = []
        },

        getEmployees: (draft, action) => {
            draft.process.status = 'resolved'
            draft.process.error = null
            draft.list = action.payload.employees
        },

        addEmployee: (draft) => {
            draft.process.status = 'resolved'
            draft.process.error = null
        },
    },
})

export default reducer
