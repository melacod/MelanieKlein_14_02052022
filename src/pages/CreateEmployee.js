import { useState } from 'react'
import { useDispatch } from 'react-redux'
import DEPARTMENTS from '../constants/departments'
import STATES from '../constants/states'
import { addEmployee } from '../features/employee'
import { Link, useNavigate } from 'react-router-dom'
import Calendar from 'react-calendar'
import { convertDateToString } from '../utils/utils'

/**
 * Create employee page
 * @component
 * @category Employee
 */
const CreateEmployee = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // state variables for the form
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState(new Date())
    const [startDate, setStartDate] = useState(new Date())
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

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(
            addEmployee({
                firstName,
                lastName,
                dateOfBirth: convertDateToString(dateOfBirth),
                startDate: convertDateToString(startDate),
                street,
                state,
                zipCode,
                department,
            })
        )
        navigate('/employee-list')
    }

    return (
        <div>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                <Link to="/employee-list">View Current Employees</Link>
                <h2>Create Employee</h2>
                <form id="create-employee" onSubmit={handleSubmit}>
                    <label htmlFor="first-name">First Name</label>
                    <input
                        type="text"
                        id="first-name"
                        onChange={firstNameChange}
                        defaultValue={firstName}
                    />

                    <label htmlFor="last-name">Last Name</label>
                    <input
                        type="text"
                        id="last-name"
                        onChange={lastNameChange}
                        defaultValue={lastName}
                    />

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <Calendar
                        id="date-of-birth"
                        onChange={setDateOfBirth}
                        value={dateOfBirth}
                    />

                    <label htmlFor="start-date">Start Date</label>
                    <Calendar
                        id="start-date"
                        onChange={setStartDate}
                        value={startDate}
                    />

                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input
                            id="street"
                            type="text"
                            onChange={streetChange}
                            defaultValue={street}
                        />

                        <label htmlFor="city">City</label>
                        <input
                            id="city"
                            type="text"
                            onChange={cityChange}
                            defaultValue={city}
                        />

                        <label htmlFor="state">State</label>
                        <select
                            name="state"
                            id="state"
                            onChange={stateChange}
                            value={state}
                        >
                            {STATES.map((state, idx) => (
                                <option key={'state-' + idx}>
                                    {state.name}
                                </option>
                            ))}
                        </select>

                        <label htmlFor="zip-code">Zip Code</label>
                        <input
                            id="zip-code"
                            type="number"
                            onChange={zipCodeChange}
                            defaultValue={zipCode}
                        />
                    </fieldset>

                    <label htmlFor="department">Department</label>
                    <select
                        name="department"
                        id="department"
                        onChange={departmentChange}
                        value={department}
                    >
                        {DEPARTMENTS.map((department, idx) => (
                            <option key={'dep-' + idx}>
                                {department.name}
                            </option>
                        ))}
                    </select>
                    <button>Save</button>
                </form>
            </div>
            <div id="confirmation" className="modal">
                Employee Created!
            </div>
        </div>
    )
}

export default CreateEmployee
