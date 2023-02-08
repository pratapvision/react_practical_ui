import React, { useState } from 'react'
import { Button, Col, Row, Toast } from 'react-bootstrap'
import '../index.css'

const NotificationModal = ({ toggleNotificationModal, notificationModal }) => {
    return (
        <div className='navTopIcon'>
            <Row>
                <Col className="mb-2 float-right mt-10">
                    <Toast show={notificationModal} onClose={toggleNotificationModal}>
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">Notification</strong>
                            <small>11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body>Notification Check</Toast.Body>
                    </Toast>
                </Col>
            </Row>
        </div>
    )
}

export default NotificationModal