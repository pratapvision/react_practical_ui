import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Delete = ({ deleteShow, handleDeleteClose, id }) => {
    console.log('id', id)

    const [delData, setDelData] = useState(JSON.parse(localStorage.getItem("TableData")))

    console.log('delData', delData)

    const deleteId = (id) => {
        const deleteTask = delData.filter((task) => task.id !== id)
        console.log('deleteTask', deleteTask)
        setDelData(deleteTask)
        localStorage.setItem("TableData", JSON.stringify(deleteTask))
    }

    return (
        <Modal show={deleteShow} onHide={handleDeleteClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure want to delete ?</Modal.Body>
            <Modal.Footer>
                <Button variant="btn btn-outline-success" onClick={handleDeleteClose}>
                    No
                </Button>
                <Button variant="btn btn-outline-danger" onClick={deleteId && handleDeleteClose} >
                    Yes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Delete