import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DEPARTMENTS from '../constants/departments.js'
import STATES from '../constants/states'
import { addEmployee } from '../store/EmployeesReducer'
import { useNavigate } from 'react-router-dom'
import DatePicker from 'react-date-picker'
import { convertDateToString } from '../utils/utils'
import { Picker } from '@react-native-picker/picker'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { selectEmployees } from '../store/Select.js'
import Spinner from '../components/Spinner.js'
import Error from '../components/Error.js'
import Modal from '@melacod/react-modal'

import './CreateEmployee.css'

/**
 * Page used to create new employee
 * @component
 * @category Employee
 */
const CreateEmployee = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // select employees data from store
    const employees = useSelector(selectEmployees)

    // state variables for the form
    const [saved, setSaved] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState(new Date())
    const [startDate, setStartDate] = useState(new Date())
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState(STATES[0].name)
    const [zipCode, setZipCode] = useState('')
    const [department, setDepartment] = useState(DEPARTMENTS[0].name)

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

    // handle Zip Code me change event
    const zipCodeChange = (event) => {
        setZipCode(event.target.value)
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
                city,
                zipCode,
                department,
            })
        )
        setSaved(true)
    }

    const handleModalClick = () => {
        if (employees.process.status === 'pending') {
            return
        }
        if (employees.process.status === 'rejected') {
            setSaved(false)
        } else {
            navigate('/list-employees')
        }
    }

    return (
        <>
            <Header />
            <main>
                <h1>Create a new employee</h1>
                <form id="newEmployeeForm" onSubmit={handleSubmit}>
                    <div>
                        <div>
                            <label htmlFor="first-name">First Name</label>
                            <input
                                type="text"
                                id="first-name"
                                onChange={firstNameChange}
                                defaultValue={firstName}
                            />
                        </div>
                        <div>
                            <label htmlFor="last-name">Last Name</label>
                            <input
                                type="text"
                                id="last-name"
                                onChange={lastNameChange}
                                defaultValue={lastName}
                            />
                        </div>
                        <div>
                            <label htmlFor="department">Department</label>
                            <Picker
                                id="department"
                                className="picker"
                                selectedValue={department}
                                onValueChange={(itemValue, itemIndex) =>
                                    setDepartment(itemValue)
                                }
                            >
                                {DEPARTMENTS.map((department, idx) => (
                                    <Picker.Item
                                        key={'department-' + idx}
                                        label={department.name}
                                        value={department.name}
                                    />
                                ))}
                            </Picker>
                        </div>
                        <div>
                            <label htmlFor="date-of-birth">Date of Birth</label>
                            <DatePicker
                                id="date-of-birth"
                                onChange={setDateOfBirth}
                                value={dateOfBirth}
                            />
                        </div>
                        <div>
                            <label htmlFor="start-date">Start Date</label>
                            <DatePicker
                                id="start-date"
                                onChange={setStartDate}
                                value={startDate}
                            />
                        </div>
                        <div></div>
                    </div>
                    <div>
                        <fieldset>
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
                            <Picker
                                id="state"
                                className="picker"
                                selectedValue={state}
                                onValueChange={(itemValue, itemIndex) =>
                                    setState(itemValue)
                                }
                            >
                                {STATES.map((state, idx) => (
                                    <Picker.Item
                                        key={'state-' + idx}
                                        label={state.name}
                                        value={state.name}
                                    />
                                ))}
                            </Picker>

                            <label htmlFor="zip-code">Zip Code</label>
                            <input
                                id="zip-code"
                                type="number"
                                onChange={zipCodeChange}
                                defaultValue={zipCode}
                            />
                        </fieldset>
                    </div>
                </form>
                <button type="submit" className="save" form="newEmployeeForm">
                    Save
                </button>
            </main>
            <Modal
                show={saved}
                title="Information"
                onClickCloseBtn={handleModalClick}
            >
                <>
                    {employees.process.status === 'pending' ? (
                        <Spinner />
                    ) : employees.process.status === 'rejected' ? (
                        <Error error={employees.process.error} />
                    ) : (
                        <>
                            <div className="confirm message">
                                Employee created!
                            </div>
                            <div className="confirm info">
                                Close the popup to see employee list
                            </div>
                        </>
                    )}
                </>
            </Modal>
            <Footer />
        </>
    )
}

export default CreateEmployee
