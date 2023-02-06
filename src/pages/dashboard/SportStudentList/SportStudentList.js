import React, { useState } from 'react'
import { Button } from 'reactstrap'
import { FaChevronDown, FaPlus, FaRedo, FaTimes, FaPrint, FaFilePdf, FaFileDownload } from 'react-icons/fa'

import '../index.css'
import SportCustomTable from './SportCustomTable'
import StudentAEForm from '../../../common/Modal/Dashboard/Student/StudentAEForm'

const SportStudentList = () => {
    const [modal, setModal] = useState(false)
    const [toggleTable, setToggleTable] = useState(true)

    const toggleModal = () => setModal(!modal)

    const onCancel = () => {
        // resetForm()
        toggleModal()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
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
                <div className='card-body'>
                    <div className='float-left'>
                        <Button className='text-white bg-dark px-3 p-3' onClick={toggleModal}>
                            <FaPlus /> Add New
                        </Button>
                    </div>
                    <div className='float-right'>
                        <div className='d-flex'>
                            <div className='px-3 mt-3'>
                                <FaFilePdf size="30px" />
                            </div>
                            <div className='px-3 mt-3'>
                                <FaFileDownload size="30px" />
                            </div>
                            <div className='text-black bg-light px-3 p-3 rounded'>
                                <b className='me-3 fs-5'>Print</b>
                                <FaPrint color='#FD683F' size="25px" />
                            </div>
                        </div>
                    </div>
                </div>
                {toggleTable && (
                    <div className='card-body'>
                        <div className="col-md-12 overflow-auto">
                            <SportCustomTable
                            />

                        </div>
                    </div>
                )}
                <StudentAEForm
                    modal={modal}
                    toggleModal={toggleModal}
                    onCancel={onCancel}
                    handleSubmit={handleSubmit}
                />
            </div>
        </div >
    )
}

export default SportStudentList