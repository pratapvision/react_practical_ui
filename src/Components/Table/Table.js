import React, { useEffect, useState } from 'react'
import { FaChevronDown, FaPlus, FaRedo, FaTimes } from 'react-icons/fa'
import {
    Button,
    Col,
    Input,
    InputGroup,
    InputGroupText,
    Row,
    Table
} from 'reactstrap'
import ls from 'local-storage'

import './table.css'
import Delete from './Delete/Delete'
import AddEditForm from './AddEditForm/AddEditForm'

const TableName = () => {
    const [productData, setProductData] = useState([])

    const [myProduct, setMyProduct] = useState({
        id: Date.now(),
        productName: '',
        productCategory: '',
        productPrice: '',
        inStock: '',
        size: [],
        productDescription: ''
    })

    const [modal, setModal] = useState(false)

    const [editId, setEditId] = useState(null)
    const [deleteOpen, setDeleteOpen] = useState(false)

    const [deleteId, setDeleteId] = useState(null)

    const [formErrors, setFormErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [searchedVal, setSearchedVal] = useState("");
    console.log('searchedVal', searchedVal)

    const toggleModal = () => setModal(!modal)
    const deleteClose = () => setDeleteOpen(!deleteOpen)

    let errors = {}

    const validate = (values) => {
        if (!values.productName) {
            errors.productName = "Please Enter Product name"
        }
        // if (!values.productCategory) {
        //     errors.productCategory = "Please Select Category"
        // }
        if (!values.productPrice) {
            errors.productPrice = "Please Enter Product Price"
        }
        if (!values.inStock) {
            errors.inStock = "Please Select Anyone"
        }
        if ((values.size).length === 0) {
            errors.size = "Please Select Cloth Size"
        }
        if (!values.productDescription) {
            errors.productDescription = "Description is required!"
        }

        return errors
    }

    const onChangeInput = (e) => {
        setMyProduct({ ...myProduct, [e.target.name]: e.target.value })
    }

    const onCheckBoxChange = (e) => {
        if (e.target.checked) {
            setMyProduct({ ...myProduct, size: [...myProduct.size, e.target.value], });
        } else {
            setMyProduct({ ...myProduct, size: myProduct.size.filter((element) => element !== e.target.value), });
        }
    }

    const getLocalStorage = () => {
        if (ls.get("productData")) {
            setProductData(ls.get("productData"))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(myProduct))
        setIsSubmitting(true)
    }

    const onSubmitFrom = (e) => {
        if (editId !== null) {
            setProductData(productData.splice(productData.findIndex((element) => element.id === editId), 1, myProduct))
            ls.set("productData", productData)
            getLocalStorage()
            toggleModal()
            resetForm()
            setEditId(null)
        } else {
            setProductData([...productData, myProduct])
            toggleModal()
            resetForm()
        }
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            onSubmitFrom()
        }
    }, [formErrors])

    useEffect(() => {
        if (!modal) {
            Object.keys(formErrors).forEach((i) => formErrors[i] = '')
        }
    }, [modal])

    const onDelete = (id) => {
        setDeleteId(id)
        setDeleteOpen(true)
    }

    const onDeleteProduct = (id) => {
        productData.splice(productData.findIndex((element) => element.id === deleteId), 1)
        ls.set("productData", productData);
        setDeleteOpen(false)
        getLocalStorage();
    }

    const onEdit = (id) => {
        setEditId(id)
        setMyProduct(productData.filter((element) => element.id === id)[0])
        toggleModal()
    }

    const resetForm = () => {
        setMyProduct({
            id: Date.now(),
            productName: '',
            productCategory: '',
            productPrice: '',
            inStock: '',
            size: [],
            productDescription: ''
        })
    }

    const onCancel = () => {
        resetForm()
        toggleModal()
    }
    useEffect(() => {
        getLocalStorage()
    }, [])

    useEffect(() => {
        ls.set("productData", productData)
    }, [productData])

    return (
        <div className='card mt-2'>
            <Row className="card-header p-3">
                <Col>
                    <h4 className="card-title float-left"> All Professors </h4>
                </Col>
                <Col>
                    <div className='h-100 d-flex align-items-center justify-content-end gap-3'>
                        <FaRedo size='17px' role='button' />
                        <FaChevronDown size='20px' role='button' />
                        <FaTimes size='20px' role='button' />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={2} className='py-3'>
                    <Button className='text-white bg-dark px-3 p-3' onClick={toggleModal}>
                        <FaPlus /> Add New
                    </Button>
                </Col>
                <Col lg={3} md={7} className='py-3'>
                    <InputGroup className="py-2">
                        <InputGroupText className="bg-transparent border-0 h-100">
                            <i className="fa fa-search me-2 fa-lg" aria-hidden="true" ></i>   Search:
                        </InputGroupText>
                        <Input onChange={(e) => setSearchedVal(e.target.value)} className="bg-transparent border-1 pl-0 py-2 h-100" />
                    </InputGroup>
                </Col>
                <Col className='py-3 me-5'>
                    <div className='float-right title-side-drop p-3' >
                        <label className="color-white">Show</label>
                        <label className="color-white drop-ten">10</label>
                        <i className="fa fa-angle-down color-white drop-icon" aria-hidden="true"></i>
                        <label className="color-white entires">entires</label>
                    </div>
                </Col>
            </Row>
            <Row className="card-body">
                <Col className="col-md-12  overflow-auto">
                    <Table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Product Name <i className="fa fa-filter" aria-hidden="true" ></i></th>
                                <th>Description <i className="fa fa-filter" aria-hidden="true" ></i></th>
                                <th>Category <i className="fa fa-filter" aria-hidden="true" ></i></th>
                                <th>Product Price <i className="fa fa-filter" aria-hidden="true" ></i></th>
                                <th>Cloth Size <i className="fa fa-filter" aria-hidden="true" ></i></th>
                                <th>In stock <i className="fa fa-filter" aria-hidden="true" ></i></th>
                                <th>Actions <i className="fa fa-filter" aria-hidden="true" ></i></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                productData.length !== 0 ? productData.filter(
                                    (user) => {
                                        return user.productName.toString().toLowerCase().includes(searchedVal.toString().toLowerCase()) ||
                                            user.productDescription.toString().toLowerCase().includes(searchedVal.toString().toLowerCase())
                                    }
                                ).map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.productName}</td>
                                            <td>{item.productDescription}</td>
                                            <td>{item.productCategory}</td>
                                            <td>{item.productPrice}</td>
                                            <td>{item.size.join(", ")}</td>
                                            <td>{item.inStock}</td>
                                            <td className='text-center'>
                                                <i className="fa fa-edit edit-icon" aria-hidden="true" onClick={() => onEdit(item.id)}></i>
                                                <i className="fa fa-trash delete-icon" aria-hidden="true" onClick={() => onDelete(item.id)} />
                                            </td>
                                        </tr>
                                    )
                                }) : <div className='text-center'>No Data Found</div>
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>

            <div>
                <div className='float-left pagi-show px-3'>
                    <strong>Showing 1 to 10 of 10 entires</strong>
                </div>
                <div className='float-right px-3'>
                    <i className="fa fa-less-than pagi-icon" aria-hidden="true"></i>
                    <strong>01 </strong>
                    <i className="fa fa-greater-than pagi-icon" aria-hidden="true"></i>
                </div>
            </div>

            <AddEditForm
                modal={modal}
                toggleModal={toggleModal}
                onCancel={onCancel}
                handleSubmit={handleSubmit}
                myProduct={myProduct}
                formErrors={formErrors}
                onChangeInput={onChangeInput}
                onCheckBoxChange={onCheckBoxChange}
            />

            <Delete deleteOpen={deleteOpen} deleteClose={deleteClose} onDeleteProduct={onDeleteProduct} />
        </div>
    )
}


export default TableName