import React, { useState, useEffect } from 'react'
import { Button } from 'reactstrap'
import { FaChevronDown, FaPlus, FaRedo, FaTimes, FaPrint, FaFilePdf, FaFileDownload, FaFileExcel } from 'react-icons/fa'
import ls from 'local-storage'
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable'

import '../index.css'
import SportCustomTable from './SportCustomTable'
import StudentAEForm from '../../../common/Modal/Dashboard/Student/StudentAEForm'
import Delete from '../../../common/Delete/Delete'
import useSortableData from '../../../common/Sorting/useSortableData'
import Pagination from '../../../common/Pagination/Pagination'
import { CSVLink } from 'react-csv';

let PageSize = 5;

const SportStudentList = () => {


    const [sportStudentData, setSportStudentData] = useState([])
    const [paginatedData, setPaginatedData] = useState([])

    const [mySportStudent, setMySportStudent] = useState({
        id: Date.now(),
        sportStudentName: '',
        sportAssignCoach: '',
        sportStudentDate: '',
        sportStudentTime: '',
    })
    const [modal, setModal] = useState(false)
    const [deleteOpen, setDeleteOpen] = useState(false)
    const [toggleTable, setToggleTable] = useState(true)

    const [editId, setEditId] = useState(null)
    const [deleteId, setDeleteId] = useState(null)

    const [formErrors, setFormErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false);

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
        if (!values.sportStudentName) {
            errors.sportStudentName = "Please Enter Student Name"
        }
        if (!values.sportAssignCoach) {
            errors.sportAssignCoach = "Please Enter Sport Assign Coach"
        }
        if (!values.sportStudentDate) {
            errors.sportStudentDate = "Please Select Date"
        }
        if (!values.sportStudentTime) {
            errors.sportStudentTime = "Please Select Time"
        }

        return errors
    }

    const onChangeInput = (e) => {
        setMySportStudent({ ...mySportStudent, [e.target.name]: e.target.value })
    }

    const getLocalStorage = () => {
        if (ls.get("allSportStudentData")) {
            setSportStudentData(ls.get("allSportStudentData"))
        }
    }

    const currentTableData = (() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        const data = sportStudentData
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
    }, [sportStudentData, currentPage])

    useEffect(() => {
        ls.set("allSportStudentData", sportStudentData)
    }, [sportStudentData])

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(mySportStudent))
        setIsSubmitting(true)
    }

    const onSubmitFrom = (e) => {
        if (editId !== null) {
            setSportStudentData(sportStudentData.splice(sportStudentData.findIndex((element) => element.id === editId), 1, mySportStudent))
            ls.set("allSportStudentData", sportStudentData)
            getLocalStorage()
            toggleModal()
            resetForm()
            // currentTableData()
            setEditId(null)
        } else {
            setSportStudentData([...sportStudentData, mySportStudent])
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
        sportStudentData.splice(sportStudentData.findIndex((element) => element.id === deleteId), 1)
        ls.set("allSportStudentData", sportStudentData);
        setDeleteOpen(false)
        getLocalStorage();
    }

    const onEdit = (id) => {
        setEditId(id)
        setMySportStudent(sportStudentData.filter((element) => element.id === id)[0])
        toggleModal()
    }

    const resetForm = () => {
        setMySportStudent({
            id: Date.now(),
            sportStudentName: '',
            sportAssignCoach: '',
            sportStudentDate: '',
            sportStudentTime: '',
        })
    }

    const onCancel = () => {
        resetForm()
        toggleModal()
    }

    const exportPDF = () => {
        const unit = "pt";
        const size = "A4";
        const orientation = "portrait";

        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);

        doc.setFontSize(15);

        const title = "Sport Student List";
        const headers = [["Student Name", "Assigned Coach", "Date", "Time"]];

        const data = paginatedData?.map(elt => [elt?.sportStudentName, elt?.sportAssignCoach, elt?.sportStudentDate, elt?.sportStudentTime]);

        let content = {
            startY: 50,
            head: headers,
            body: data
        };

        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("report.pdf")
    }

    return (
        <div className='pt-2 card-group mt-3'>
            <div className=' card shadow-sm px-2 me-3 bg-white rounded'>
                <div className='card-body border-bottom'>
                    <div className='float-left'>
                        <h4 className="card-title float-left"> Sport Student List </h4>
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
                            <div className='float-left'>
                                <Button className='text-white bg-dark px-3 p-3' onClick={toggleModal}>
                                    <FaPlus /> Add New
                                </Button>
                            </div>
                            <div className='float-right'>
                                <div className='d-flex'>
                                    <div className='px-3 mt-3'>
                                        <FaFilePdf onClick={exportPDF} size="30px" />
                                    </div>
                                    <div className='px-3 mt-3'>
                                        <CSVLink className=' text-decoration-none' data={paginatedData}>
                                            <FaFileExcel size="30px" />
                                        </CSVLink>
                                    </div>
                                    <div className='text-black bg-light px-3 p-3 rounded'>
                                        <b className='me-3 fs-5'>Print</b>
                                        <FaPrint color='#FD683F' size="25px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className="col-md-12 overflow-auto">
                                <SportCustomTable
                                    requestSort={requestSort}
                                    getClassNamesFor={getClassNamesFor}
                                    sportStudentData={sportStudentData}
                                    items={items}
                                    onEdit={onEdit}
                                    onDelete={onDelete}
                                />
                            </div>
                            <div>
                                <Pagination
                                    className="pagination-bar"
                                    currentPage={currentPage}
                                    totalCount={sportStudentData?.length}
                                    pageSize={PageSize}
                                    onPageChange={page => setCurrentPage(page)}
                                />
                            </div>
                        </div>
                    </>
                )}
                <StudentAEForm
                    modal={modal}
                    toggleModal={toggleModal}
                    onCancel={onCancel}
                    handleSubmit={handleSubmit}
                    mySportStudent={mySportStudent}
                    formErrors={formErrors}
                    onChangeInput={onChangeInput}
                />

                <Delete
                    deleteOpen={deleteOpen}
                    deleteClose={deleteClose}
                    onDeleteProduct={onDeleteProduct}
                />
            </div>
        </div >
    )
}

export default SportStudentList