import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import './create.css'

const Create = ({ addShow, handleAddClose }) => {

    let items = JSON.parse(localStorage.getItem('TableData'));

    const initialValues = {
        // img: '',
        name: '',
        department: '',
        degree: '',
        number: '',
        joining_date: '',
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
        let DataPush = items.push(value);
        localStorage.setItem('TableData', JSON.stringify(items));

    }
    return (
        <Modal show={addShow} onHide={handleAddClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Form</Modal.Title>
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
                                    // value={values.img}
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
                                // value={values.name}
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
                                // value={values.department}
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
                                // value={values.degree}
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
                                // value={values.number}
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
                                    <Button className='btn btn-dark mt-3 submit-button' type="submit" >Add User</Button>
                                </div>

                            </Modal.Body>
                        </Form>
                    )
                }}
            </Formik>
        </Modal >
    )
}

export default Create