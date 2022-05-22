import { useDispatch, useSelector } from 'react-redux'
import { selectEmployees } from '../store/Select'
import DataTable from 'react-data-table-component'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useEffect } from 'react'
import { getEmployees } from '../store/EmployeesReducer'
import Spinner from '../components/Spinner'
import Error from '../components/Error'
import Message from '../components/Message'

/**
 * Page used to list all employees
 * @component
 * @category Employee
 */
const ListEmployees = () => {
    const dispatch = useDispatch()

    // select employees data from store
    const employees = useSelector(selectEmployees)

    // call action getEmployees from employees reducer
    useEffect(() => {
        dispatch(getEmployees())
    }, [dispatch])

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
                {employees.process.status === 'pending' ? (
                    <Spinner />
                ) : employees.process.status === 'rejected' ? (
                    <Error error={employees.process.error} />
                ) : employees.list.length === 0 ? (
                    <Message message="No employees found" />
                ) : (
                    <DataTable
                        columns={columns}
                        data={employees.list}
                        pagination
                        fixedHeader
                    />
                )}
            </main>
            <Footer />
        </>
    )
}

export default ListEmployees
