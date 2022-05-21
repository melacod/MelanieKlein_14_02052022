import { collection, getDocs, addDoc } from 'firebase/firestore/lite'
import firestore from '../firebase'

/**
 * Mock add a new employee backend call
 * @function mockAddEmployee
 * @param {object} dataAddEmployee object that received data from backend
 * @param {object} employeeToAdd employee to add
 * @returns true if mock is used else false
 * @category Firebase
 */
export async function mockAddEmployee(dataAddEmployee, employeeToAdd) {
    const mockType = 'data'
    if (mockType === 'error') {
        throw new Error('Internal server error')
    } else if (mockType === 'message') {
        dataAddEmployee.status = 400
        dataAddEmployee.message = 'Employee already exists'
        return true
    } else if (mockType === 'data') {
        dataAddEmployee.status = 200
        dataAddEmployee.message = 'Employee created'
        dataAddEmployee.body = addEmployeeToFirestore(employeeToAdd)
        return true
    } else {
        return false
    }
}

/**
 * Add a new employee in mock database
 * @function addEmployeeToFirestore
 * @param {object} employeeToAdd employee to add to firestore database
 * @returns the added employee or null if an error ocurred
 * @category Firebase
 */
async function addEmployeeToFirestore(employeeToAdd) {
    try {
        const employeesCollection = collection(firestore, 'Employee')
        const employeeDocumentRef = addDoc(employeesCollection, employeeToAdd)
        console.log('Employee written with id: ' + employeeDocumentRef.id)
        return employeeToAdd
    } catch (e) {
        console.error('Error adding employee document: ', e)
        return null
    }
}

/**
 * Mock get employees backend call
 * @function mockGetEmployees
 * @param {object} dataGetEmployees object that received data from backend
 * @returns true if mock is used else false
 * @category Firebase
 */
export async function mockGetEmployees(dataGetEmployees) {
    const mockType = 'data'
    if (mockType === 'error') {
        throw new Error('Internal server error')
    } else if (mockType === 'message') {
        dataGetEmployees.status = 404
        dataGetEmployees.message = 'No employee found'
        return true
    } else if (mockType === 'data') {
        dataGetEmployees.status = 200
        dataGetEmployees.message = 'All employees retrieved'
        dataGetEmployees.body = await getMockEmployeesFromFirestore()
        return true
    } else {
        return false
    }
}

/**
 * Get a list of employees from mock database
 * @function getMockEmployeesFromFirestore
 * @returns the list of mock employees
 * @category Firebase
 */
async function getMockEmployeesFromFirestore() {
    const employeesCollection = collection(firestore, 'Employee')
    const employeesSnapshot = await getDocs(employeesCollection)
    const employees = employeesSnapshot.docs.map((doc) => doc.data())
    return employees
}
