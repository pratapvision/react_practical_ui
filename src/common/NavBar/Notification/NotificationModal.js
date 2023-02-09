import React, { useState } from 'react'
import { Button, Col, Row, Toast } from 'react-bootstrap'
import notificationIcon from '../../../assets/Header/ClarityNotification.png'
import '../index.css'

const NotificationModal = ({ toggleNotificationModal, notificationModal }) => {
    return (
        <div className='navTopIcon'>
            <Row>
                <Col className="mb-2 float-right mt-10">
                    <Toast show={notificationModal} onClose={toggleNotificationModal}>
                        <Toast.Header>
                            <img
                                src={notificationIcon}
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">Notification</strong>
                            <small>11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body className='text-center bg-light'>
                            <p>Message 1</p>
                            <p>Message 2</p>
                            <p>Message 3</p>
                        </Toast.Body>
                    </Toast>
                </Col>
            </Row>
        </div>
    )
}

export default NotificationModal