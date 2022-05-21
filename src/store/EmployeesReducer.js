import { createSlice } from '@reduxjs/toolkit'
import { mockAddEmployee, mockGetEmployees } from '../mocks/EmployeeMocks'
import { selectEmployees } from './Select'
import BACKEND_URL from './Urls'

/**
 * Employee initial state
 * @kind constant
 * @category Employee
 */
const initialState = {
    process: {
        status: 'void',
        message: null,
        error: null,
    },
    list: [],
    added: null,
}

/**
 * Add employee action wrapper
 * @param employeeToAdd the employee to add
 * @category Employee
 */
export function addEmployee(employeeToAdd) {
    return async (dispatch, getState) => {
        // get current status
        const status = selectEmployees(getState()).process.status

        if (status === 'pending' || status === 'updating') {
            // if request is currently running, we stop here (to avoid trigger same request thing multiple times)
            return
        }

        // we update status to fetching
        dispatch(actions.fetching())

        // Simulate data loading to show spinner
        //await new Promise((r) => setTimeout(r, 2 * 1000))

        try {
            let dataAddEmployee = {}

            // call backend API only if mock is not used
            const mockUsed = await mockAddEmployee(
                dataAddEmployee,
                employeeToAdd
            )
            if (!mockUsed) {
                // we call backend API to add the new employee
                //      => using method PUT
                //      => with new employee (firstName/lastName/...) in body
                const responseAddEmployee = await fetch(
                    BACKEND_URL + '/employee',
                    {
                        method: 'PUT',
                        body: JSON.stringify(employeeToAdd),
                    }
                )
                // we wait for the backend response
                dataAddEmployee = await responseAddEmployee.json()
            }

            console.log('dataAddEmployee', dataAddEmployee)

            dispatch(
                actions.addEmployee({
                    responseStatus: dataAddEmployee.status,
                    process: {
                        message: dataAddEmployee.message,
                    },
                    employee: employeeToAdd,
                })
            )
        } catch (error) {
            // if any error is catch, we reject the request with the error message
            console.log(error)
            dispatch(
                actions.rejected({
                    process: {
                        error: error.message,
                    },
                })
            )
        }
    }
}

/**
 * Get all existing employees
 * @param {boolean} useMock true to use mock data instead of caling backend
 * @category Employee
 */
export function getEmployees(useMock = 'data') {
    return async (dispatch, getState) => {
        // get current status
        const status = selectEmployees(getState()).process.status

        if (status === 'pending' || status === 'updating') {
            // if request is currently running, we stop here (to avoid trigger same request thing multiple times)
            return
        }

        // we update status to fetching
        dispatch(actions.fetching())

        // Simulate data loading to show spinner
        //await new Promise((r) => setTimeout(r, 2 * 1000))

        try {
            let dataGetEmployees = {}

            // call backend API only if mock is not used
            const mockUsed = await mockGetEmployees(dataGetEmployees)
            if (!mockUsed) {
                // we call backend API to get all emplopyees
                //      => using method GET
                const responseGetEmployees = await fetch(
                    BACKEND_URL + '/employees'
                )

                // we wait for the backend response
                dataGetEmployees = await responseGetEmployees.json()
            }
            console.log('dataGetEmployees', dataGetEmployees)

            // if response status from employees API is 200
            //      => all employees (array) are returned in body
            // else there is an error message (no employees found, etc, ...)
            //      => we resolve the request with the error message and we stop
            dispatch(
                actions.resolved({
                    responseStatus: dataGetEmployees.status,
                    process: {
                        message: dataGetEmployees.message,
                        error: null,
                    },
                    list: dataGetEmployees.body,
                })
            )
        } catch (error) {
            // if any error is catch, we reject the request with the error message
            console.log(error)
            dispatch(
                actions.rejected({
                    process: {
                        error: error.message,
                    },
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
        // fetching action & reducer
        fetching: (draft) => {
            if (draft.process.status === 'void') {
                // no status => move to pending
                draft.process.status = 'pending'
                draft.list = []
                return
            }
            // status rejected => remove error and move to pending
            if (draft.process.status === 'rejected') {
                draft.process.error = null
                draft.process.status = 'pending'
                draft.list = []
                return
            }
            // status resolved => move to pending (data are here but request still in progress)
            if (draft.process.status === 'resolved') {
                draft.process.status = 'pending'
                draft.list = []
                return
            }
            // other status => ignored
            return
        },

        // resolved action & reducer
        resolved: (draft, action) => {
            // pending or updating => move to resolved
            if (
                draft.process.status === 'pending' ||
                draft.process.status === 'updating'
            ) {
                // we clean all user information
                draft.process.status = 'resolved'
                draft.process.message = null
                draft.process.error = null
                draft.list = []

                // if status is 200 => we have employee data
                // else we have an error message
                if (action.payload.responseStatus === 200) {
                    draft.list = action.payload.list
                } else {
                    draft.process.message = action.payload.process.message
                }
                return
            }

            // other status => ignored
            return
        },

        // rejected action & reducer
        rejected: (draft, action) => {
            // pending or updating => move to rejected
            if (
                draft.process.status === 'pending' ||
                draft.process.status === 'updating'
            ) {
                // we clean user information and have an error message
                draft.process.status = 'rejected'
                draft.process.message = null
                draft.process.error = action.payload.process.error
                draft.list = []
                return
            }

            // other status => ignored
            return
        },

        // add employee action & reducer
        addEmployee: (draft, action) => {
            // if status is 200 => we have new added employee
            // else we have an error message
            draft.process.status = 'resolved'
            draft.process.message = null
            draft.process.error = null
            if (action.payload.responseStatus === 200) {
                draft.added = action.payload.employee
            } else {
                draft.process.message = action.payload.process.message
                draft.added = null
            }
        },
    },
})

export default reducer
