import { collection, getDocs, addDoc } from 'firebase/firestore/lite'
import firestore from './firebase'

/**
 * Get a list of employees from mock database
 * @function getEmployeesFromFirestore
 * @returns the list of mock employees
 * @category Firebase
 */
export async function getEmployeesFromFirestore() {
    try {
        const employeesCollection = collection(firestore, 'Employee')
        const employeesSnapshot = await getDocs(employeesCollection)
        const employees = employeesSnapshot.docs.map((doc) => doc.data())
        return employees
    } catch (e) {
        throw new Error('Error while getting employees: ' + e.message)
    }
}

/**
 * Add a new employee in mock database
 * @function addEmployeeToFirestore
 * @param {object} employeeToAdd employee to add to firestore database
 * @returns the added employee or null if an error ocurred
 * @category Firebase
 */
export async function addEmployeeToFirestore(employeeToAdd) {
    try {
        const employeesCollection = collection(firestore, 'Employee')
        addDoc(employeesCollection, employeeToAdd)
    } catch (e) {
        throw new Error('Error while adding employee: ' + e.message)
    }
}
