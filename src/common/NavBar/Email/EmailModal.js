import React, { useState } from 'react'
import { Button, Col, Row, Toast } from 'react-bootstrap'
import emailIcon from '../../../assest/Header/ClarityEmail.png'

import '../index.css'

const EmailModal = ({ toggleEmailModal, emailModal }) => {
    return (
        <div className='navTopIcon'>
            <Row>
                <Col className="mb-2 float-right mt-10">
                    <Toast show={emailModal} onClose={toggleEmailModal}>
                        <Toast.Header>
                            <img
                                src={emailIcon}
                                className="rounded me-2"
                                alt="emailIcon"
                            />
                            <strong className="me-auto">Email</strong>
                            <small>47 mins ago</small>
                        </Toast.Header>
                        <Toast.Body className='text-center bg-light'>
                            <p>Message 1</p>
                        </Toast.Body>
                    </Toast>
                </Col>
            </Row>
        </div>
    )
}

export default EmailModal