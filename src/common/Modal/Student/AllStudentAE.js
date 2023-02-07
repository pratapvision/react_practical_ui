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
import '../submitButton.css'

const AllStudentAE = ({
    modal,
    toggleModal,
    onCancel,
    handleSubmit,
    myStudent,
    formErrors,
    onChangeInput,
    // imageUpload
}) => {

    return (
        <Modal isOpen={modal} toggle={toggleModal}>
            <ModalHeader toggle={onCancel}>Product Form</ModalHeader>
            <ModalBody>
                <Form onSubmit={handleSubmit}>
                    <Row className=' align-items-center pt-1'>
                        <Col lg={12}>
                            {/* <Input
                                type='file'
                                id="image"
                                name='image'
                                // value={myProduct.productName}
                                onChange={imageUpload}
                            /> */}
                            <Label for='studentName'>Student Name</Label>
                            <Input
                                type='text'
                                id="studentName"
                                name='studentName'
                                placeholder='Student Name'
                                value={myStudent.studentName}
                                onChange={onChangeInput}
                            />
                            {formErrors.studentName && (<small className="text-danger">{formErrors.studentName}</small>)}
                        </Col>
                        <Col lg={12} className=' align-items-center pt-1'>
                            <FormGroup>
                                <Label for="studentDepartment">Student Department</Label>
                                <Input
                                    type="text"
                                    id="studentDepartment"
                                    name="studentDepartment"
                                    maxLength={250}
                                    rows="3"
                                    value={myStudent.studentDepartment}
                                    onChange={onChangeInput}
                                    placeholder="Student Department"
                                />
                                {formErrors.studentDepartment && (<small className="text-danger">{formErrors.studentDepartment}</small>)}
                            </FormGroup>
                        </Col>

                        <Col lg={12}>
                            <FormGroup>
                                <Label for="studentMobile">Student Mobile</Label>
                                <Input
                                    type="number"
                                    id="studentMobile"
                                    name="studentMobile"
                                    value={myStudent.studentMobile}
                                    onChange={onChangeInput}
                                    placeholder="Student Mobile"
                                />
                                {formErrors.studentMobile && (<small className="text-danger">{formErrors.studentMobile}</small>)}
                            </FormGroup>
                        </Col>

                        <Col lg={12}>
                            <FormGroup>
                                <Label for="admissionDate">Admission Date</Label>
                                <Input
                                    type="date"
                                    id="admissionDate"
                                    name="admissionDate"
                                    value={myStudent.admissionDate}
                                    onChange={onChangeInput}
                                />
                                {formErrors.admissionDate && (<small className="text-danger">{formErrors.admissionDate}</small>)}
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

export default AllStudentAE