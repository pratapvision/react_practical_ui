import React from 'react'
import {
    Button,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Row
} from 'reactstrap'
import '../../submitButton.css'

const StudentAEForm = ({
    modal,
    toggleModal,
    onCancel,
    handleSubmit,
    formErrors,
    // imageUpload
}) => {

    return (
        <Modal isOpen={modal} toggle={toggleModal}>
            <ModalHeader toggle={onCancel}> Sport Student Form</ModalHeader>
            <ModalBody>
                <Form onSubmit={handleSubmit}>
                    <Row className=' align-items-center pt-1'>
                        <Col lg={12} className=' align-items-center pt-1'>
                            <FormGroup>
                                <Label for='studentName'>Student Name</Label>
                                <Input
                                    type='text'
                                    id="studentName"
                                    name='studentName'
                                    placeholder='Student Name'
                                // value={myProduct.studentName}
                                // onChange={onChangeInput}
                                />
                            </FormGroup>
                        </Col>
                        <Col lg={12} className=' align-items-center pt-1'>
                            <FormGroup>
                                <Label for='assignedCoach'>Assigned Coach</Label>
                                <Input
                                    type='text'
                                    id="assignedCoach"
                                    name='assignedCoach'
                                    placeholder='Assigned Coach'
                                />
                            </FormGroup>
                        </Col>
                        <Col lg={12} className=' align-items-center pt-1'>
                            <FormGroup>
                                <Label for='date'>Date</Label>
                                <Input
                                    type='date'
                                    id="date"
                                    name='date'
                                />
                            </FormGroup>
                        </Col>
                        <Col lg={12} className=' align-items-center pt-1'>
                            <FormGroup>
                                <Label for='time'>Time</Label>
                                <Input
                                    type='time'
                                    id="time"
                                    name='time'
                                />
                            </FormGroup>
                        </Col>
                    </Row>

                    <ModalFooter>
                        <Button color="btn btn-outline-danger" onClick={onCancel}>
                            Cancel
                        </Button>
                        <Button type='submit' color='btn btn-outline-success'>
                            Save
                        </Button>
                    </ModalFooter>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default StudentAEForm