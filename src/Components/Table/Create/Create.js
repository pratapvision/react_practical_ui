import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import { Field, Form, Formik } from 'formik';
import './create.css'

const Create = ({ addShow, handleAddClose }) => {

    let items = JSON.parse(localStorage.getItem('TableData'));
    console.log('items1', items)

    const initialValues = {
        img: '',
        name: '',
        department: '',
        degree: '',
        number: '',
        joining_date: '',
    }

    const onSubmit = (value) => {
        // alert(JSON.stringify(value, null, 2));
        console.log('value', value)
        console.log('itemsBefore', items)
        let DataPush = items.push(value);
        console.log('itemsAfter', items)
        alert(items)
        console.log('DAta', DataPush)
        localStorage.setItem(JSON.stringify("TableData", items))

    }
    return (
        <Modal show={addShow} onHide={handleAddClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Form</Modal.Title>
            </Modal.Header>
            <Formik onSubmit={onSubmit} initialValues={initialValues}>
                {({ errors, handleChange }) => {

                    return (
                        <Form>
                            <Modal.Body>
                                <label htmlFor="img">Image </label>
                                <Field
                                    id="img"
                                    name="img"
                                    type="file"
                                    className="form-control inp_text mt-1"
                                    onChange={handleChange}
                                    // value={values.img}
                                    required
                                />
                                <label htmlFor="name">Name</label>
                                <Field
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Name"
                                    className="form-control inp_text mt-1"
                                    onChange={handleChange}
                                    // value={values.name}
                                    required
                                />
                                <label htmlFor="department" className='mt-3'>Department</label>
                                <Field
                                    id="department"
                                    name="department"
                                    type="text"
                                    placeholder="Department"
                                    className="form-control inp_text mt-1"
                                    onChange={handleChange}
                                    // value={values.department}
                                    required
                                />
                                <label htmlFor="degree" className='mt-3'>Degree</label>
                                <Field
                                    id="degree"
                                    name="degree"
                                    type="text"
                                    placeholder="degree"
                                    className="form-control inp_text mt-1"
                                    onChange={handleChange}
                                    // value={values.degree}
                                    required
                                />
                                <label htmlFor="number" className='mt-3'>Mobile Number</label>
                                <Field
                                    id="number"
                                    name="number"
                                    type="number"
                                    placeholder="Mobile Number"
                                    className="form-control inp_text mt-1"
                                    onChange={handleChange}
                                    // value={values.number}
                                    required
                                />
                                <label htmlFor="joining_date" className='mt-3'>Joining Date</label>
                                <Field
                                    id="joining_date"
                                    name="joining_date"
                                    type="date"
                                    placeholder="Joining Date"
                                    className="form-control inp_text mt-1"
                                    onChange={handleChange}
                                    // value={values.joining_date}
                                    required
                                />
                                <div className="text-center px-2">
                                    <Button className='btn btn-dark mt-3 submit-button' type="submit">Add User</Button>
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