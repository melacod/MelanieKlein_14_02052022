import { useSelector } from 'react-redux'
import { selectEmployee } from '../select'

/**
 * CurrentEmployees page
 * @component
 * @category CurrentEmployees
 */
const CurrentEmployees = () => {
    const employee = useSelector(selectEmployee)

    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <table id="employee-table" className="display">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Start Date</th>
                        <th>Department</th>
                        <th>Date of Birth</th>
                        <th>Street</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip Code</th>
                    </tr>
                </thead>
                <tbody>
                    {employee.employeeList.map((emp, index) => (
                        <tr key={index}>
                            <td>{emp.firstName}</td>
                            <td>{emp.lastName}</td>
                            <td>{emp.startDate}</td>
                            <td>{emp.department}</td>
                            <td>{emp.dateOfBirth}</td>
                            <td>{emp.street}</td>
                            <td>{emp.city}</td>
                            <td>{emp.state}</td>
                            <td>{emp.zipCode}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <a href="index.html">Home</a>
        </div>
    )
}

export default CurrentEmployees
