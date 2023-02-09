import React, { useEffect, useState } from 'react'
import ls from 'local-storage'

import HeadingCards from '../../dashboard/HeadingCards/HeadingCards'
import useSortableData from '../../../common/Sorting/useSortableData'
import Pagination from '../../../common/Pagination/Pagination'
import AllStudentAE from '../../../common/Modal/Student/AllStudentAE'
import Delete from '../../../common/Delete/Delete'
import TableHeader from '../../../common/Table/TableHeader'
import '../index.css'
import TableData from '../../../common/Table/TableData'
import TableSearch from '../../../common/Table/TableSearch'
import Buttons from '../../../common/Button/Buttons'

let PageSize = 10;

const StudentList = () => {
    const [studentData, setStudentData] = useState([])
    const [paginatedData, setPaginatedData] = useState([])

    const [myStudent, setMyStudent] = useState({
        id: Date.now(),
        // image: [],
        studentName: '',
        studentDepartment: '',
        studentMobile: '',
        admissionDate: '',
    })

    const [modal, setModal] = useState(false)
    const [deleteOpen, setDeleteOpen] = useState(false)

    const [toggleTable, setToggleTable] = useState(true)

    const [editId, setEditId] = useState(null)
    const [deleteId, setDeleteId] = useState(null)

    const [formErrors, setFormErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [searchedVal, setSearchedVal] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const toggleModal = () => setModal(!modal)
    const deleteClose = () => setDeleteOpen(!deleteOpen)

    const { items, requestSort, sortConfig } = useSortableData(paginatedData)

    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    let errors = {}

    const validate = (values) => {
        if (!values.studentName) {
            errors.studentName = "Please Enter Student Name"
        }
        if (!values.studentDepartment) {
            errors.studentDepartment = "Please Enter Student Department"
        }
        if (!values.studentMobile) {
            errors.studentMobile = "Please Enter Student Mobile"
        }
        if (!values.admissionDate) {
            errors.admissionDate = "Please Select Admission Date"
        }

        return errors
    }

    const onChangeInput = (e) => {
        setMyStudent({ ...myStudent, [e.target.name]: e.target.value })
    }

    const getLocalStorage = () => {
        if (ls.get("allStudentData")) {
            setStudentData(ls.get("allStudentData"))
        }
    }

    const currentTableData = (() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        const data = studentData
        setPaginatedData(data.slice(firstPageIndex, lastPageIndex))
    })

    useEffect(() => {
        getLocalStorage()

        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            onSubmitFrom()
        }
    }, [formErrors])

    useEffect(() => {
        if (!modal) {
            Object.keys(formErrors).forEach((i) => formErrors[i] = '')
        }
    }, [modal])

    useEffect(() => {
        currentTableData()
    }, [studentData, currentPage])

    useEffect(() => {
        ls.set("allStudentData", studentData)
    }, [studentData])

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(myStudent))
        setIsSubmitting(true)
    }

    const onSubmitFrom = (e) => {
        if (editId !== null) {
            setStudentData(studentData.splice(studentData.findIndex((element) => element.id === editId), 1, myStudent))
            ls.set("allStudentData", studentData)
            getLocalStorage()
            toggleModal()
            resetForm()
            // currentTableData()
            setEditId(null)
        } else {
            setStudentData([...studentData, myStudent])
            toggleModal()
            resetForm()
            // currentTableData()
        }
    }

    const onDelete = (id) => {
        setDeleteId(id)
        setDeleteOpen(true)
    }

    const onDeleteProduct = (id) => {
        studentData.splice(studentData.findIndex((element) => element.id === deleteId), 1)
        ls.set("allStudentData", studentData);
        setDeleteOpen(false)
        getLocalStorage();
    }

    const onEdit = (id) => {
        setEditId(id)
        setMyStudent(studentData.filter((element) => element.id === id)[0])
        toggleModal()
    }

    const resetForm = () => {
        setMyStudent({
            id: Date.now(),
            // image: [],
            studentName: '',
            studentDepartment: '',
            studentMobile: '',
            admissionDate: '',
        })
    }

    const onCancel = () => {
        resetForm()
        toggleModal()
    }

    return (
        <div className='card shadow-sm px-2 me-3 bg-white rounded'>
            <TableHeader
                headerName='All Student'
                setToggleTable={setToggleTable}
                toggleTable={toggleTable}
            />
            {toggleTable && (
                <>
                    <div className='card-body'>
                        <div className='float-left d-flex'>
                            <Buttons name='Add New' toggleModal={toggleModal} />
                            <TableSearch setSearchedVal={setSearchedVal} />
                        </div>
                        <div className=' d-flex float-right title-side-drop p-3 me-3 text-white'>
                            <div className='me-2'>
                                <label>Show</label>
                            </div>
                            <div className='me-2 border-bottom'>
                                <label>{studentData?.length}</label>
                            </div>
                            <div>
                                <label>entires</label>
                            </div>
                            {/* <button className='float-right title-side-drop p-3 me-3 text-white'>Export to PDF</button> */}
                        </div>
                    </div>
                    <div className='card-body'>
                        <div className="col-md-12 overflow-auto">
                            <TableData
                                name="studentList"
                                requestSort={requestSort}
                                getClassNamesFor={getClassNamesFor}
                                tableListingData={studentData}
                                items={items}
                                searchedVal={searchedVal}
                                onEdit={onEdit}
                                onDelete={onDelete}
                            />
                        </div>
                        <div>
                            <Pagination
                                className="pagination-bar"
                                currentPage={currentPage}
                                totalCount={studentData?.length}
                                pageSize={PageSize}
                                onPageChange={page => setCurrentPage(page)}
                            />
                        </div>
                    </div>
                </>
            )}
            <AllStudentAE
                modal={modal}
                toggleModal={toggleModal}
                onCancel={onCancel}
                handleSubmit={handleSubmit}
                myStudent={myStudent}
                formErrors={formErrors}
                onChangeInput={onChangeInput}
            />

            <Delete
                deleteOpen={deleteOpen}
                deleteClose={deleteClose}
                onDeleteProduct={onDeleteProduct}
            />
        </div>
    )
}
export default StudentList