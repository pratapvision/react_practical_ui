import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Delete = ({ deleteShow, handleDeleteClose }) => {
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
                <Button variant="btn btn-outline-danger" onClick={handleDeleteClose}>
                    Yes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Delete