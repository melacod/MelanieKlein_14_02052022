import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectEmployee } from '../select'
import DataTable from 'react-data-table-component'

/**
 * CurrentEmployees page
 * @component
 * @category CurrentEmployees
 */
const CurrentEmployees = () => {
    const employee = useSelector(selectEmployee)

    const columns = [
        {
            name: 'First Name',
            selector: (row) => row.firstName,
            sortable: true,
        },
        {
            name: 'Last Name',
            selector: (row) => row.lastName,
            sortable: true,
        },
        {
            name: 'Start Date',
            selector: (row) => row.startDate,
            sortable: true,
        },
        {
            name: 'Department',
            selector: (row) => row.department,
            sortable: true,
        },
        {
            name: 'Date of Birth',
            selector: (row) => row.dateOfBirth,
            sortable: true,
        },
        {
            name: 'Street',
            selector: (row) => row.street,
            sortable: true,
        },
        {
            name: 'City',
            selector: (row) => row.city,
            sortable: true,
        },
        {
            name: 'State',
            selector: (row) => row.state,
            sortable: true,
        },
        {
            name: 'Zip Code',
            selector: (row) => row.zipCode,
            sortable: true,
        },
    ]

    const getData = () => {
        const employeeArray = []
        employee.employeeList.forEach((emp, idx) => {
            employeeArray.push({ ...emp })
        })
        employeeArray.forEach((emp, idx) => (emp.id = idx))
        return employeeArray
    }

    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <DataTable
                columns={columns}
                data={getData()}
                pagination
                fixedHeader
            />
            <Link to="/">Home</Link>
        </div>
    )
}

export default CurrentEmployees
