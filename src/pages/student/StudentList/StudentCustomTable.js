import React from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { Table } from 'reactstrap'

const StudentCustomTable = ({
    requestSort,
    getClassNamesFor,
    studentData,
    items,
    searchedVal,
    onEdit,
    onDelete
}) => {

    return (
        <Table className="table table-bordered">
            <thead className='bg-light'>
                <tr>
                    <th className='p-3 text-center'>
                        <label className='me-3'>
                            Roll No.
                        </label>
                    </th>
                    <th className='p-3 text-center'>
                        <label className='me-3'>
                            Name
                        </label>
                        <label onClick={() => requestSort('studentName')} className={getClassNamesFor('studentName')} >
                            <i className="fa fa-sort" aria-hidden="true" />
                        </label>
                    </th>
                    <th className='p-3 text-center'>
                        <label className='me-3'>
                            Department
                        </label>
                        <label onClick={() => requestSort('studentDepartment')} className={getClassNamesFor('studentDepartment')} >
                            <i className="fa fa-sort" aria-hidden="true" />
                        </label>
                    </th>
                    <th className='p-3 text-center'>
                        <label className='me-3'>
                            Mobile No.
                        </label>
                        <label onClick={() => requestSort('studentMobile')} className={getClassNamesFor('studentMobile')} >
                            <i className="fa fa-sort" aria-hidden="true" />
                        </label>
                    </th>
                    <th className='p-3 text-center'>
                        <label className='me-3'>
                            Admission Date
                        </label>
                        <label onClick={() => requestSort('admissionDate')} className={getClassNamesFor('admissionDate')} >
                            <i className="fa fa-sort" aria-hidden="true" />
                        </label>
                    </th>
                    <th className='p-3 text-center'>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    studentData.length ? items
                        .filter((user) => {
                            return user.studentName.toString().toLowerCase().includes(searchedVal.toString().toLowerCase()) ||
                                user.studentDepartment.toString().toLowerCase().includes(searchedVal.toString().toLowerCase())
                        })
                        .map((item, index) => {
                            return (
                                <tr key={index} className='text-center'>
                                    <td>{index + 1}</td>
                                    <td>{item.studentName}</td>
                                    <td>{item.studentDepartment}</td>
                                    <td>{item.studentMobile}</td>
                                    <td>{item.admissionDate}</td>
                                    <td className='text-center'>
                                        <i className="fa fa-edit edit-icon" aria-hidden="true" onClick={() => onEdit(item.id)}></i>
                                        <i className="fa fa-trash delete-icon" aria-hidden="true" onClick={() => onDelete(item.id)} />
                                    </td>
                                </tr>
                            )
                        }) : <></>
                }
            </tbody>
        </Table>
    )
}

export default StudentCustomTable