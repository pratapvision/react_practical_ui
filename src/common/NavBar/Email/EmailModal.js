import React, { useState } from 'react'
import { Button, Col, Row, Toast } from 'react-bootstrap'
import '../index.css'

const EmailModal = ({ toggleEmailModal, emailModal }) => {
    return (
        <div className='navTopIcon'>
            <Row>
                <Col className="mb-2 float-right mt-10">
                    <Toast show={emailModal} onClose={toggleEmailModal}>
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">Email</strong>
                            <small>11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body>Email Check</Toast.Body>
                    </Toast>
                </Col>
            </Row>
        </div>
    )
}

export default EmailModal