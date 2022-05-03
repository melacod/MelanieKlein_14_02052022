import { useState } from 'react'
import DEPARTMENTS from '../constants/departments'
import STATES from '../constants/states'

/**
 * Create employee page
 * @component
 * @category Employee
 */
const CreateEmployee = () => {
    // state variables for the form
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [startDate, setStartDate] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState(false)
    const [zipCode, setZipCode] = useState('')
    const [department, setDepartment] = useState(false)

    // handle First Name change event
    const firstNameChange = (event) => {
        setFirstName(event.target.value)
    }

    // handle Last Name change event
    const lastNameChange = (event) => {
        setLastName(event.target.value)
    }

    // handle Date of Birth me change event
    const dateOfBirthChange = (event) => {
        setDateOfBirth(event.target.value)
    }

    // handle Start Date me change event
    const startDateChange = (event) => {
        setStartDate(event.target.value)
    }

    // handle Street me change event
    const streetChange = (event) => {
        setStreet(event.target.value)
    }

    // handle City me change event
    const cityChange = (event) => {
        setCity(event.target.value)
    }

    // handle State me change event
    const stateChange = (event) => {
        setState(event.target.select)
    }

    // handle Zip Code me change event
    const zipCodeChange = (event) => {
        setZipCode(event.target.value)
    }

    // handle Department me change event
    const departmentChange = (event) => {
        setDepartment(event.target.select)
    }

    return (
        <div>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                <a href="employee-list.html">View Current Employees</a>
                <h2>Create Employee</h2>
                <form action="#" id="create-employee">
                    <label for="first-name">First Name</label>
                    <input
                        type="text"
                        id="first-name"
                        onChange={firstNameChange}
                        defaultValue={firstName}
                    />

                    <label for="last-name">Last Name</label>
                    <input
                        type="text"
                        id="last-name"
                        onChange={lastNameChange}
                        defaultValue={lastName}
                    />

                    <label for="date-of-birth">Date of Birth</label>
                    <input
                        id="date-of-birth"
                        type="text"
                        onChange={dateOfBirthChange}
                        defaultValue={dateOfBirth}
                    />

                    <label for="start-date">Start Date</label>
                    <input
                        id="start-date"
                        type="text"
                        onChange={startDateChange}
                        defaultValue={startDate}
                    />

                    <fieldset className="address">
                        <legend>Address</legend>

                        <label for="street">Street</label>
                        <input
                            id="street"
                            type="text"
                            onChange={streetChange}
                            defaultValue={street}
                        />

                        <label for="city">City</label>
                        <input
                            id="city"
                            type="text"
                            onChange={cityChange}
                            defaultValue={city}
                        />

                        <label for="state">State</label>
                        <select
                            name="state"
                            id="state"
                            onChange={stateChange}
                            value={state}
                        >
                            {STATES.map((state) => (
                                <option>{state.name}</option>
                            ))}
                        </select>

                        <label for="zip-code">Zip Code</label>
                        <input
                            id="zip-code"
                            type="number"
                            onChange={zipCodeChange}
                            defaultValue={zipCode}
                        />
                    </fieldset>

                    <label for="department">Department</label>
                    <select
                        name="department"
                        id="department"
                        onChange={departmentChange}
                        value={department}
                    >
                        {DEPARTMENTS.map((department) => (
                            <option>{department.name}</option>
                        ))}
                    </select>
                </form>

                <button onclick="saveEmployee()">Save</button>
            </div>
            <div id="confirmation" className="modal">
                Employee Created!
            </div>
        </div>
    )
}

export default CreateEmployee
