import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { Button } from 'reactstrap'

const TableAdd = ({
    toggleModal,
}) => {
    return (
        <div>
            <Button className='text-white bg-dark px-3 p-3' onClick={toggleModal}>
                <FaPlus /> Add New
            </Button>
        </div>
    )
}

export default TableAdd