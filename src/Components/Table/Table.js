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
import { CSVLink, CSVDownload } from "react-csv";
import ls from 'local-storage'

import './table.css'
import Delete from './Delete/Delete'
import AddEditForm from './AddEditForm/AddEditForm'
import Pagination from './Pagination/Pagination'
import { useMemo } from 'react'
import useSortableData from './Sorting/useSortableData'

let PageSize = 10;

const TableName = () => {
    const [productData, setProductData] = useState([])
    const [paginatedData, setPaginatedData] = useState([])

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

    const [currentPage, setCurrentPage] = useState(1);

    const toggleModal = () => setModal(!modal)
    const deleteClose = () => setDeleteOpen(!deleteOpen)

    const { items, requestSort, sortConfig } = useSortableData(paginatedData)

    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };

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

    const currentTableData = (() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        const data = productData
        setPaginatedData(data.slice(firstPageIndex, lastPageIndex))
    })

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
            // currentTableData()
            setEditId(null)
        } else {
            setProductData([...productData, myProduct])
            toggleModal()
            resetForm()
            // currentTableData()
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

    useEffect(() => {
        currentTableData()
    }, [productData, currentPage])



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
                        {/* <Button className='text-white bg-dark px-3 p-3'>
                            <CSVLink data={paginatedData}>
                                Export
                            </CSVLink>
                        </Button> */}
                    </div>
                </Col>
            </Row>
            <Row className="card-body">
                <Col className="col-md-12  overflow-auto">
                    <Table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>
                                    <label className='me-3'>
                                        Product Name
                                    </label>
                                    <label onClick={() => requestSort('productName')} className={getClassNamesFor('productName')} >
                                        <i className="fa fa-sort" aria-hidden="true" />
                                    </label>
                                    {/* <i className="fa fa-filter" aria-hidden="true" /> */}
                                </th>
                                <th>
                                    <label className='me-3'>
                                        Description
                                    </label>
                                    <label onClick={() => requestSort('productDescription')} className={getClassNamesFor('productDescription')} >
                                        <i className="fa fa-sort" aria-hidden="true" />
                                    </label>
                                    {/* Description <i className="fa fa-filter" aria-hidden="true" /> */}
                                </th>
                                <th>
                                    <label className='me-3'>
                                        Category
                                    </label>
                                    <label onClick={() => requestSort('productCategory')} className={getClassNamesFor('productCategory')} >
                                        <i className="fa fa-sort" aria-hidden="true" />
                                    </label>
                                    {/* Category <i className="fa fa-filter" aria-hidden="true" /> */}
                                </th>
                                <th>
                                    <label className='me-3'>
                                        Product Price
                                    </label>
                                    <label onClick={() => requestSort('productPrice')} className={getClassNamesFor('productPrice')} >
                                        <i className="fa fa-sort" aria-hidden="true" />
                                    </label>
                                    {/* Product Price <i className="fa fa-filter" aria-hidden="true" /> */}
                                </th>
                                <th>
                                    <label className='me-3'>
                                        Cloth Size
                                    </label>
                                    <label onClick={() => requestSort('size')} className={getClassNamesFor('size')} >
                                        <i className="fa fa-sort" aria-hidden="true" />
                                    </label>
                                    {/* Cloth Size <i className="fa fa-filter" aria-hidden="true" /> */}
                                </th>
                                <th>
                                    <label className='me-3'>
                                        In stock
                                    </label>
                                    <label onClick={() => requestSort('inStock')} className={getClassNamesFor('inStock')} >
                                        <i className="fa fa-sort" aria-hidden="true" />
                                    </label>
                                    {/* In stock <i className="fa fa-filter" aria-hidden="true" /> */}
                                </th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {
                                productData.length ? paginatedData?.map((item, index) => {
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
                            } */}
                            {
                                productData.length ? items
                                    .filter((user) => {
                                        return user.productName.toString().toLowerCase().includes(searchedVal.toString().toLowerCase()) ||
                                            user.productDescription.toString().toLowerCase().includes(searchedVal.toString().toLowerCase())
                                    })
                                    .map((item, index) => {
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
                <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={productData?.length}
                    pageSize={PageSize}
                    onPageChange={page => setCurrentPage(page)}
                />
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
        </div >
    )
}


export default TableName