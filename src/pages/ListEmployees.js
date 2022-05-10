import { useSelector } from 'react-redux'
import { selectEmployee } from '../select'
import DataTable from 'react-data-table-component'
import Footer from '../components/Footer'
import Header from '../components/Header'

/**
 * Page used to list all employees
 * @component
 * @category Employee
 */
const ListEmployees = () => {
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

    return (
        <>
            <Header />
            <main>
                <h1>List of all employees</h1>
                <DataTable
                    columns={columns}
                    data={employee.employeeList}
                    pagination
                    fixedHeader
                />
            </main>
            <Footer />
        </>
    )
}

export default ListEmployees
