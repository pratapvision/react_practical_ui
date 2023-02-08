import React, { useEffect, useState } from 'react'
import { FaFileExcel, FaFilePdf, FaPlus, } from 'react-icons/fa'
import {
    Button,
    Input,
    InputGroup,
    InputGroupText,
} from 'reactstrap'
import { CSVLink } from "react-csv";
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable'
import ls from 'local-storage'
import Delete from '../../../common/Delete/Delete';
import AddEditForm from '../../../common/Modal/Professors/AddEditForm/AddEditForm';
import useSortableData from '../../../common/Sorting/useSortableData';
import Pagination from '../../../common/Pagination/Pagination'
import '../index.css'
import CustomTable from './CustomTable';
import TableHeader from '../../../common/TableHeader/TableHeader';

let PageSize = 10;
const ProfessorTable = () => {

    const [productData, setProductData] = useState([])
    const [paginatedData, setPaginatedData] = useState([])

    const [myProduct, setMyProduct] = useState({
        id: Date.now(),
        // image: [],
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

    const [toggleTable, setToggleTable] = useState(true)

    const { items, requestSort, sortConfig } = useSortableData(paginatedData)

    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    const exportPDF = () => {
        const unit = "pt";
        const size = "A4";
        const orientation = "portrait";

        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);

        doc.setFontSize(15);

        const title = "Product Table";
        const headers = [["Product Name", "Product Description", "Product Category", "Product Price", "Size", "InStock"]];

        const data = paginatedData?.map(elt => [elt?.productName, elt?.productDescription, elt?.productCategory, elt?.productPrice, elt?.size, elt?.inStock]);

        let content = {
            startY: 50,
            head: headers,
            body: data
        };

        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("report.pdf")
    }

    let errors = {}

    const validate = (values) => {
        if (!values.productName) {
            errors.productName = "Please Enter Product name"
        }
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

    // const getBase64 = (file) => {
    //     return new Promise((resolve, reject) => {
    //         const reader = new FileReader();
    //         reader.onload = () => resolve(reader.result);
    //         reader.onerror = error => reject(error);
    //         reader.readAsDataURL(file);
    //     });
    // }

    // const imageUpload = (e) => {
    //     // const file = e.target.files[0];
    //     // getBase64(file).then(base64 => {
    //     //     base64(myProduct.image)
    //     // })
    //     setMyProduct({
    //         ...myProduct,
    //         image: [getBase64(e.target.files[0]).then(base6 => { productData.image([base6]) })]
    //     })
    // }

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

    useEffect(() => {
        getLocalStorage()

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

    useEffect(() => {
        ls.set("productData", productData)
    }, [productData])

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
    // useEffect(() => {
    //     getLocalStorage()
    // }, [])

    return (
        <div className='card shadow-sm px-2 me-3 bg-white rounded'>
            <TableHeader
                headerName=' All Professors'
                setToggleTable={setToggleTable}
                toggleTable={toggleTable}
            />

            {toggleTable && (
                <>
                    <div className='card-body'>
                        <div className='float-left d-flex'>
                            <div>
                                <Button className='text-white bg-dark px-3 p-3' onClick={toggleModal}>
                                    <FaPlus /> Add New
                                </Button>
                            </div>
                            <div>
                                <InputGroup className="py-2">
                                    <InputGroupText className="bg-transparent border-0 h-100">
                                        <i className="fa fa-search me-2 fa-lg" aria-hidden="true" ></i>   Search:
                                    </InputGroupText>
                                    <Input onChange={(e) => setSearchedVal(e.target.value)} className="bg-transparent border-1 pl-0 py-2 h-100" />
                                </InputGroup>
                            </div>
                        </div>
                        <div className='d-flex float-right'>
                            <div className='p-3 me-2' >
                                <CSVLink className=' text-decoration-none' data={paginatedData}>
                                    <FaFileExcel size="35px" />
                                </CSVLink>
                            </div>
                            <div className='p-3 me-3' style={{ cursor: 'pointer' }}>
                                <FaFilePdf onClick={exportPDF} size="35px" />
                            </div>
                            {/* <button className='float-right title-side-drop p-3 me-3 text-white' onClick={exportPDF}>Export to PDF</button> */}
                            <div className='d-flex float-right title-side-drop p-3 me-3 text-white'>
                                <div className='me-2'>
                                    <label>Show</label>
                                </div>
                                <div className='me-2 border-bottom'>
                                    <label>{productData?.length}</label>
                                </div>
                                <div>
                                    <label>entires</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="col-md-12  overflow-auto">
                            <CustomTable
                                requestSort={requestSort}
                                getClassNamesFor={getClassNamesFor}
                                productData={productData}
                                items={items}
                                searchedVal={searchedVal}
                                onEdit={onEdit}
                                onDelete={onDelete}
                            />
                        </div>
                        <div>
                            <Pagination
                                className="pagination-bar"
                                currentPage={currentPage}
                                totalCount={productData?.length}
                                pageSize={PageSize}
                                onPageChange={page => setCurrentPage(page)}
                            />
                        </div>
                    </div>
                </>
            )}

            <AddEditForm
                modal={modal}
                toggleModal={toggleModal}
                onCancel={onCancel}
                handleSubmit={handleSubmit}
                myProduct={myProduct}
                formErrors={formErrors}
                onChangeInput={onChangeInput}
                onCheckBoxChange={onCheckBoxChange}
            // imageUpload={imageUpload}
            />
            <Delete
                deleteOpen={deleteOpen}
                deleteClose={deleteClose}
                onDeleteProduct={onDeleteProduct}
            />
        </div>
    )
}

export default ProfessorTable