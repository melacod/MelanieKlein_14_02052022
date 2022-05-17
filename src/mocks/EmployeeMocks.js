import DEPARTMENTS from '../constants/departments'
import STATES from '../constants/states'
import { convertDateToString } from '../utils/utils'

/**
 * Employee mock Dark Vador
 * @kind constant
 * @category Mock
 */
export const MOCK_EMPLOYEE_1 = {
    firstName: 'Dark',
    lastName: 'Vador',
    dateOfBirth: convertDateToString(new Date(1990, 9, 9)),
    startDate: convertDateToString(new Date(2012, 12, 12)),
    street: '42, black hole',
    state: STATES[1].name,
    city: 'Black star',
    zipCode: 666,
    department: DEPARTMENTS[2].name,
}

/**
 * All employees mock
 * @kind constant
 * @category Mock
 */
export const MOCK_EMPLOYEES = [MOCK_EMPLOYEE_1]
