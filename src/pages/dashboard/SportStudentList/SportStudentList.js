import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Spinner } from 'reactstrap'
import { FaPrint, FaFilePdf, FaFileExcel } from 'react-icons/fa'
import ls from 'local-storage'
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable'
import { CSVLink } from 'react-csv';
import ReactToPrint from 'react-to-print';

import Delete from '../../../common/Delete/Delete'
import Pagination from '../../../common/Pagination/Pagination'

import '../index.css'
import TableHeader from '../../../common/Table/TableHeader';
import Buttons from '../../../common/Button/Buttons';
import AddEditForm from '../../../common/Table/AddEditForm';
import { SportCustomTable } from '../../../common/Table/TableData';
import useSortableData from '../../../utils/useSortableData';
import { studentSportFormValidate } from '../../../utils/validation';

let PageSize = 5;

const SportStudentList = () => {

    const componentRef = useRef();
    const onBeforeGetContentResolve = useRef(null);

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

    const [loading, setLoading] = useState(false);

    const toggleModal = () => setModal(!modal)
    const deleteClose = () => setDeleteOpen(!deleteOpen)

    const { items, requestSort, sortConfig } = useSortableData(paginatedData)
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };

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
        setFormErrors(studentSportFormValidate(mySportStudent))
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

    const handleOnBeforeGetContent = useCallback(() => {
        setLoading(true);
        return new Promise((resolve) => {
            onBeforeGetContentResolve.current = resolve;

            setTimeout(() => {
                setLoading(false);
                resolve();
            }, 1000);
        });
    }, [setLoading]);


    return (
        <div className='pt-2 card-group mt-3'>
            <div className=' card shadow-sm px-2 me-3 bg-white rounded'>
                <TableHeader
                    headerName='Sport Student List'
                    setToggleTable={setToggleTable}
                    toggleTable={toggleTable}
                />
                {toggleTable && (
                    <>
                        <div className='card-body'>
                            <div className='float-left'>
                                <Buttons name="Add New" toggleModal={toggleModal} />
                            </div>
                            <div className='float-right'>
                                <div className='d-flex'>
                                    <div className='px-3 mt-3'>
                                        <FaFilePdf onClick={exportPDF} size="30px" style={{ cursor: 'pointer' }} />
                                    </div>
                                    <div className='px-3 mt-3'>
                                        <CSVLink className=' text-decoration-none' data={paginatedData}>
                                            <FaFileExcel size="30px" />
                                        </CSVLink>
                                    </div>
                                    <div className='text-black bg-light px-3 p-3 rounded'>
                                        {loading ?
                                            <>
                                                <div className='text-center'>
                                                    <Spinner />
                                                </div>
                                                <p className="indicator">Please Wait</p>
                                            </>
                                            :
                                            <>
                                                <b className='me-3 fs-5'>Print</b>
                                                <ReactToPrint
                                                    trigger={() => <FaPrint style={{ cursor: 'pointer' }} color='#FD683F' size="25px" />}
                                                    content={() => componentRef.current}
                                                    onBeforeGetContent={handleOnBeforeGetContent}
                                                />
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className="col-md-12 overflow-auto">
                                <SportCustomTable
                                    name="sportTable"
                                    ref={componentRef}
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
                <AddEditForm
                    name='Add Sport Student Form'
                    modal={modal}
                    toggleModal={toggleModal}
                    onCancel={onCancel}
                    handleSubmit={handleSubmit}
                    myFormData={mySportStudent}
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