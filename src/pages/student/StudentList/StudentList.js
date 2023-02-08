import React, { useEffect, useState } from 'react'
import { FaChevronDown, FaPlus, FaRedo, FaTimes } from 'react-icons/fa'
import {
    Button,
    Input,
    InputGroup,
    InputGroupText,
} from 'reactstrap'
import ls from 'local-storage'

import HeadingCards from '../../dashboard/HeadingCards/HeadingCards'
import useSortableData from '../../../common/Sorting/useSortableData'
import StudentCustomTable from './StudentCustomTable'
import Pagination from '../../../common/Pagination/Pagination'
import AllStudentAE from '../../../common/Modal/Student/AllStudentAE'
import Delete from '../../../common/Delete/Delete'
import '../index.css'

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
            <div className='card-body border-bottom'>
                <div className='float-left'>
                    <h4 className="card-title float-left"> All Student </h4>
                </div>
                <div className='float-right'>
                    <FaRedo size='17px' role='button' className='me-3' />
                    <FaChevronDown size='20px' role='button' className='me-3' onClick={() => setToggleTable(!toggleTable)} />
                    <FaTimes size='20px' role='button' className='me-3' />
                </div>
            </div>
            {toggleTable && (
                <>
                    <div className='card-body'>
                        <div className='float-left d-flex'>
                            <div>
                                <Button className='text-white bg-dark px-3 p-3' onClick={toggleModal}>
                                    <FaPlus /> Add New
                                </Button>
                            </div>
                            <div>
                                <InputGroup className="py-2">
                                    <InputGroupText className="bg-transparent border-0 h-100">
                                        <i className="fa fa-search me-2 fa-lg" aria-hidden="true" ></i>   Search:
                                    </InputGroupText>
                                    <Input onChange={(e) => setSearchedVal(e.target.value)} className="bg-transparent border-1 pl-0 py-2 h-100" />
                                </InputGroup>
                            </div>
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
                            <StudentCustomTable
                                requestSort={requestSort}
                                getClassNamesFor={getClassNamesFor}
                                studentData={studentData}
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