import React from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { Table } from 'reactstrap'

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import '../index.css'

const SportCustomTable = ({
    requestSort,
    getClassNamesFor,
    sportStudentData,
    items,
    onEdit,
    onDelete
}) => {
    return (
        <Table className="table">
            <thead className='bg-light'>
                <tr>
                    <th className='p-3 text-center'>Select</th>
                    <th className='p-3 text-center'>
                        <label className='me-3'>
                            Student Name
                        </label>
                        <label onClick={() => requestSort('sportStudentName')} className={getClassNamesFor('sportStudentName')} >
                            <i className="fa fa-sort" aria-hidden="true" />
                        </label>
                    </th>
                    <th className='p-3 text-center'>
                        <label className='me-3'>
                            Assigned Coach
                        </label>
                        <label onClick={() => requestSort('sportAssignCoach')} className={getClassNamesFor('sportAssignCoach')} >
                            <i className="fa fa-sort" aria-hidden="true" />
                        </label>
                    </th>
                    <th className='p-3 text-center'>
                        <label className='me-3'>
                            Date
                        </label>
                        <label onClick={() => requestSort('sportStudentDate')} className={getClassNamesFor('sportStudentDate')} >
                            <i className="fa fa-sort" aria-hidden="true" />
                        </label>
                    </th>
                    <th className='p-3 text-center'>
                        <label className='me-3'>
                            Time
                        </label>
                        <label onClick={() => requestSort('sportStudentTime')} className={getClassNamesFor('sportStudentTime')} >
                            <i className="fa fa-sort" aria-hidden="true" />
                        </label>
                    </th>
                    <th className='p-3 text-center'>Action</th>
                </tr>
            </thead>
            <tbody>
                {sportStudentData.length ? items
                    .map((item, index) => {
                        return (
                            <tr key={index}>
                                <td className='p-3 text-center'><input type='checkbox' /></td>
                                <td className='p-3 text-center'>{item?.sportStudentName}</td>
                                <td className='p-3 text-center'>{item?.sportAssignCoach}</td>
                                <td className='p-3 text-center'>{item?.sportStudentDate}</td>
                                <td className='p-3 text-center'>{item?.sportStudentTime}</td>

                                <td className='text-center'>
                                    {/* <i className="fa fa-edit edit-icon" aria-hidden="true" onClick={() => onEdit(item.id)}></i>
                                <i className="fa fa-trash delete-icon" aria-hidden="true" onClick={() => onDelete(item.id)} /> */}
                                    <DropdownButton className='text-center' id="dropdown-basic" variant="warning" title="Action">
                                        <Dropdown.Item onClick={() => onEdit(item.id)}>Edit</Dropdown.Item>
                                        <Dropdown.Item onClick={() => onDelete(item.id)}>Delete</Dropdown.Item>
                                    </DropdownButton>
                                </td>
                            </tr>
                        )
                    }) : <></>}
            </tbody>
        </Table>
    )
}

export default SportCustomTable