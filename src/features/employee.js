import { createSlice } from '@reduxjs/toolkit'

/**
 * Employee initial state
 * @kind constant
 * @category EmployeeState
 */
const initialState = {
    data: {
        email: null,
        password: null,
        firstName: null,
        lastName: null,
    },
}

/**
 * Employee state actions and reducers
 * @returns actions and reducers
 * @category UserState
 */
const { actions, reducer } = createSlice({
    name: 'employee',
    initialState,
    reducers: {},
})

export default reducer
