import React from 'react'
import { Table } from 'reactstrap'

const TableData = (props) => {
    const { requestSort, getClassNamesFor, tableListingData, items, onEdit, onDelete, searchedVal, name } = props

    switch (name) {
        case "studentList":
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
                            tableListingData.length ? items
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

        case "professorTable":
            return (
                <Table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>
                                <label className='me-3'>
                                    Product Name
                                </label>
                                <label onClick={() => requestSort('productName')} className={getClassNamesFor('productName')} >
                                    <i className="fa fa-sort" aria-hidden="true" />
                                </label>
                                {/* <i className="fa fa-filter" aria-hidden="true" /> */}
                            </th>
                            <th>
                                <label className='me-3'>
                                    Description
                                </label>
                                <label onClick={() => requestSort('productDescription')} className={getClassNamesFor('productDescription')} >
                                    <i className="fa fa-sort" aria-hidden="true" />
                                </label>
                            </th>
                            <th>
                                <label className='me-3'>
                                    Category
                                </label>
                                <label onClick={() => requestSort('productCategory')} className={getClassNamesFor('productCategory')} >
                                    <i className="fa fa-sort" aria-hidden="true" />
                                </label>
                            </th>
                            <th>
                                <label className='me-3'>
                                    Product Price
                                </label>
                                <label onClick={() => requestSort('productPrice')} className={getClassNamesFor('productPrice')} >
                                    <i className="fa fa-sort" aria-hidden="true" />
                                </label>
                            </th>
                            <th>
                                <label className='me-3'>
                                    Cloth Size
                                </label>
                                <label onClick={() => requestSort('size')} className={getClassNamesFor('size')} >
                                    <i className="fa fa-sort" aria-hidden="true" />
                                </label>
                            </th>
                            <th>
                                <label className='me-3'>
                                    In stock
                                </label>
                                <label onClick={() => requestSort('inStock')} className={getClassNamesFor('inStock')} >
                                    <i className="fa fa-sort" aria-hidden="true" />
                                </label>
                            </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableListingData.length ? items
                                .filter((user) => {
                                    return user.productName.toString().toLowerCase().includes(searchedVal.toString().toLowerCase()) ||
                                        user.productDescription.toString().toLowerCase().includes(searchedVal.toString().toLowerCase())
                                })
                                .map((item, index) => {
                                    return (
                                        <tr key={index} className='text-center'>
                                            <td>{index + 1}</td>
                                            <td>{item.productName}</td>
                                            <td>{item.productDescription}</td>
                                            <td>{item.productCategory}</td>
                                            <td>{item.productPrice}</td>
                                            <td>{item.size.join(", ")}</td>
                                            <td>{item.inStock}</td>
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
}

export default TableData