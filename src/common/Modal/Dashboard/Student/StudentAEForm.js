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
    mySportStudent,
    formErrors,
    onChangeInput,
}) => {

    return (
        <Modal isOpen={modal} toggle={toggleModal}>
            <ModalHeader toggle={onCancel}> Sport Student Form</ModalHeader>
            <ModalBody>
                <Form onSubmit={handleSubmit}>
                    <Row className=' align-items-center pt-1'>
                        <Col lg={12} className=' align-items-center pt-1'>
                            <FormGroup>
                                <Label for='sportStudentName'>Sport Student Name</Label>
                                <Input
                                    type='text'
                                    id="sportStudentName"
                                    name='sportStudentName'
                                    placeholder='Student Name'
                                    value={mySportStudent.sportStudentName}
                                    onChange={onChangeInput}
                                />
                                {formErrors.sportStudentName && (<small className="text-danger">{formErrors.sportStudentName}</small>)}
                            </FormGroup>
                        </Col>
                        <Col lg={12} className=' align-items-center pt-1'>
                            <FormGroup>
                                <Label for='sportAssignCoach'>Assigned Coach</Label>
                                <Input
                                    type='text'
                                    id="sportAssignCoach"
                                    name='sportAssignCoach'
                                    placeholder='Assigned Coach'
                                    value={mySportStudent.sportAssignCoach}
                                    onChange={onChangeInput}
                                />
                                {formErrors.sportAssignCoach && (<small className="text-danger">{formErrors.sportAssignCoach}</small>)}
                            </FormGroup>
                        </Col>
                        <Col lg={12} className=' align-items-center pt-1'>
                            <FormGroup>
                                <Label for='sportStudentDate'>Sport Student Date</Label>
                                <Input
                                    type='date'
                                    id="sportStudentDate"
                                    name='sportStudentDate'
                                    value={mySportStudent.sportStudentDate}
                                    onChange={onChangeInput}
                                />
                                {formErrors.sportStudentDate && (<small className="text-danger">{formErrors.sportStudentDate}</small>)}
                            </FormGroup>
                        </Col>
                        <Col lg={12} className=' align-items-center pt-1'>
                            <FormGroup>
                                <Label for='sportStudentTime'>Time</Label>
                                <Input
                                    type='time'
                                    id="sportStudentTime"
                                    name='sportStudentTime'
                                    value={mySportStudent.sportStudentTime}
                                    onChange={onChangeInput}
                                />
                                {formErrors.sportStudentTime && (<small className="text-danger">{formErrors.sportStudentTime}</small>)}
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