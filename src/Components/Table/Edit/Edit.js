import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import '../Create/create.css'

const Edit = ({ editShow, handleEditClose, editData }) => {

    const initialValues = {
        name: editData?.name,
        department: editData?.department,
        degree: editData?.degree,
        number: editData?.number,
        joining_date: moment(editData?.joining_date).toDate()
    }
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Name Required'),
        department: Yup.string()
            .required('Department Required'),
        degree: Yup.string()
            .required('Degree Required'),
        number: Yup.number()
            .required('Number Required'),
        joining_date: Yup.date()
            .required('Joining Date Required'),
    })

    const onSubmit = (value) => {
        alert(JSON.stringify(value, null, 2));
    }

    return (
        <Modal show={editShow} onHide={handleEditClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Form</Modal.Title>
            </Modal.Header>
            <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
                {({ errors, handleChange, touched }) => {

                    return (
                        <Form>
                            <Modal.Body>
                                {/* <label htmlFor="img">Image </label>
                                <Field
                                    id="img"
                                    name="img"
                                    type="file"
                                    className="form-control inp_text mt-1"
                                    onChange={handleChange}
                                    // value={formik.values.img}
                                    required
                                /> */}
                                <label htmlFor="name">Name</label>
                                <Field
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Name"
                                    className="form-control inp_text mt-1"
                                    onChange={handleChange}
                                // value={formik.values.name}
                                />
                                {errors.name && touched.name ? (
                                    <div>{errors.name}</div>
                                ) : null}
                                <label htmlFor="department" className='mt-3'>Department</label>
                                <Field
                                    id="department"
                                    name="department"
                                    type="text"
                                    placeholder="Department"
                                    className="form-control inp_text mt-1"
                                    onChange={handleChange}
                                // value={formik.values.department}
                                />
                                {errors.department && touched.department ? (
                                    <div>{errors.department}</div>
                                ) : null}
                                <label htmlFor="degree" className='mt-3'>Degree</label>
                                <Field
                                    id="degree"
                                    name="degree"
                                    type="text"
                                    placeholder="degree"
                                    className="form-control inp_text mt-1"
                                    onChange={handleChange}
                                // value={formik.values.degree}
                                />
                                {errors.degree && touched.degree ? (
                                    <div>{errors.degree}</div>
                                ) : null}
                                <label htmlFor="number" className='mt-3'>Mobile Number</label>
                                <Field
                                    id="number"
                                    name="number"
                                    type="number"
                                    placeholder="Mobile Number"
                                    className="form-control inp_text mt-1"
                                    onChange={handleChange}
                                // value={formik.values.number}
                                />
                                {errors.number && touched.number ? (
                                    <div>{errors.number}</div>
                                ) : null}
                                <label htmlFor="joining_date" className='mt-3'>Joining Date</label>
                                <Field
                                    id="joining_date"
                                    name="joining_date"
                                    type="date"
                                    placeholder="Joining Date"
                                    className="form-control inp_text mt-1"
                                    onChange={handleChange}
                                // value={values.joining_date}
                                />
                                {errors.joining_date && touched.joining_date ? (
                                    <div>{errors.joining_date}</div>
                                ) : null}
                                <div className="text-center px-2">
                                    <Button className='btn btn-dark mt-3 submit-button' type="submit">Update User</Button>
                                </div>

                            </Modal.Body>
                        </Form>
                    )
                }}
            </Formik>
        </Modal>
    )
}

export default Edit