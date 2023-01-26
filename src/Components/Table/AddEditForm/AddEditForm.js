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
import './addEditForm.css'

const AddEditForm = ({ modal, toggleModal, onCancel, handleSubmit, myProduct, formErrors, onChangeInput, onCheckBoxChange }) => {

    return (
        <Modal isOpen={modal} toggle={toggleModal}>
            <ModalHeader toggle={onCancel}>Product Form</ModalHeader>
            <ModalBody>
                <Form onSubmit={handleSubmit}>
                    <Row className=' align-items-center pt-1'>
                        <Col lg={12}>
                            <Label for='productName'>Product Name</Label>
                            <Input
                                type='text'
                                id="productName"
                                name='productName'
                                placeholder='Product Name'
                                value={myProduct.productName}
                                onChange={onChangeInput}
                            />
                            {formErrors.productName && (<small className="text-danger">{formErrors.productName}</small>)}
                        </Col>
                        <Col lg={12} className=' align-items-center pt-1'>
                            <FormGroup>
                                <Label for="productDescription">Description</Label>
                                <Input
                                    type="textarea"
                                    id="productDescription"
                                    name="productDescription"
                                    maxLength={250}
                                    rows="3"
                                    value={myProduct.productDescription}
                                    onChange={onChangeInput}
                                    placeholder="Product Description"
                                />
                                {formErrors.productDescription && (<small className="text-danger">{formErrors.productDescription}</small>)}
                            </FormGroup>
                        </Col>
                        <Col lg={12}>
                            <FormGroup>
                                <Label for="productCategory">
                                    Select Category
                                </Label>
                                <Input
                                    type="select"
                                    id="productCategory"
                                    name="productCategory"
                                    value={myProduct.productCategory}
                                    onChange={onChangeInput}
                                >
                                    <option>Man</option>
                                    <option>Woman</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col lg={12}>
                            <FormGroup>
                                <Label for="productPrice">Product Price</Label>
                                <Input
                                    type="number"
                                    id="productPrice"
                                    name="productPrice"
                                    value={myProduct.productPrice}
                                    onChange={onChangeInput}
                                    placeholder="Product Price"
                                />
                                {formErrors.productPrice && (<small className="text-danger">{formErrors.productPrice}</small>)}
                            </FormGroup>
                        </Col>
                        <Col lg={12}>
                            <Label>Cloth Size</Label>
                            <FormGroup>
                                <Row className='align-items-center pt-1'>
                                    <Col lg={3} md={2}>
                                        <Input
                                            name="inStock"
                                            type="checkbox"
                                            value='Small'
                                            checked={myProduct.size.indexOf("Small") !== -1 ? true : false}
                                            onChange={onCheckBoxChange}
                                        />
                                        {' '}
                                        <Label check>Small</Label>
                                    </Col>
                                    <Col lg={3} md={2}>
                                        <Input
                                            name="inStock"
                                            type="checkbox"
                                            value='Medium'
                                            checked={myProduct.size.indexOf("Medium") !== -1 ? true : false}
                                            onChange={onCheckBoxChange}
                                        />
                                        {' '}
                                        <Label check>Medium</Label>
                                    </Col>
                                    <Col lg={3} md={2}>
                                        <Input
                                            name="inStock"
                                            type="checkbox"
                                            value='Large'
                                            checked={myProduct.size.indexOf("Large") !== -1 ? true : false}
                                            onChange={onCheckBoxChange}
                                        />
                                        {' '}
                                        <Label check>Large</Label>
                                    </Col>
                                </Row>
                                {formErrors.size && (<small className="text-danger">{formErrors.size}</small>)}
                            </FormGroup>
                        </Col>
                        <Col lg={12}>
                            <Label>Stock</Label>
                            <FormGroup>
                                <Row className='align-items-center pt-1'>
                                    <Col lg={3} md={4}>
                                        <Input
                                            name="inStock"
                                            type="radio"
                                            value='In Stock'
                                            checked={myProduct.inStock === 'In Stock' ? true : false}
                                            onChange={onChangeInput}
                                        />
                                        {' '}
                                        <Label check>In Stock</Label>
                                    </Col>
                                    <Col lg={4} md={4}>
                                        <Input
                                            name="inStock"
                                            type="radio"
                                            value='Out of Stock'
                                            checked={myProduct.inStock === 'Out of Stock' ? true : false}
                                            onChange={onChangeInput}
                                        />
                                        {' '}
                                        <Label check>Out Of Stock</Label>
                                    </Col>
                                </Row>
                                {formErrors.inStock && (<small className="text-danger">{formErrors.inStock}</small>)}
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

export default AddEditForm