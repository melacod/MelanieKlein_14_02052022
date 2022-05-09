import { createSlice } from '@reduxjs/toolkit'

/**
 * Employee initial state
 * @kind constant
 * @category EmployeeState
 */
const initialState = {
    employeeList: [],
}

/**
 * Employee state actions and reducers
 * @returns actions and reducers
 * @category UserState
 */
export function addEmployee(employeeToAdd) {
    return async (dispatch, getState) => {
        dispatch(actions.addEmployee(employeeToAdd))
    }
}

/**
 * Employee state actions and reducers
 * @returns actions and reducers
 * @category UserState
 */
const { actions, reducer } = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        // add employee action & reducer
        addEmployee: (draft, action) => {
            draft.employeeList.push(action.payload)
        },
    },
})

export default reducer
