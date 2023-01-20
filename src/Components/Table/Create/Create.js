import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import './create.css'

const Create = ({ addShow, handleAddClose }) => {

    const formik = useFormik({
        initialValues: {
            // name: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <Modal show={addShow} onHide={handleAddClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Form</Modal.Title>
            </Modal.Header>
            <form onSubmit={formik.handleSubmit}>
                <Modal.Body>
                    <label htmlFor="img">Image </label>
                    <input
                        id="img"
                        name="img"
                        type="file"
                        className="form-control inp_text mt-1"
                        onChange={formik.handleChange}
                        value={formik.values.img}
                        required
                    />
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Name"
                        className="form-control inp_text mt-1"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        required
                    />
                    <label htmlFor="department" className='mt-3'>Department</label>
                    <input
                        id="department"
                        name="department"
                        type="text"
                        placeholder="Department"
                        className="form-control inp_text mt-1"
                        onChange={formik.handleChange}
                        value={formik.values.department}
                        required
                    />
                    <label htmlFor="degree" className='mt-3'>Degree</label>
                    <input
                        id="degree"
                        name="degree"
                        type="text"
                        placeholder="degree"
                        className="form-control inp_text mt-1"
                        onChange={formik.handleChange}
                        value={formik.values.degree}
                        required
                    />
                    <label htmlFor="number" className='mt-3'>Mobile Number</label>
                    <input
                        id="number"
                        name="number"
                        type="number"
                        placeholder="Mobile Number"
                        className="form-control inp_text mt-1"
                        onChange={formik.handleChange}
                        value={formik.values.number}
                        required
                    />
                    <label htmlFor="joining_date" className='mt-3'>Joining Date</label>
                    <input
                        id="joining_date"
                        name="joining_date"
                        type="date"
                        placeholder="Joining Date"
                        className="form-control inp_text mt-1"
                        onChange={formik.handleChange}
                        value={formik.values.joining_date}
                        required
                    />
                    <div className="text-center px-2">
                        <Button className='btn btn-dark mt-3 submit-button' type="submit">Add User</Button>
                    </div>

                </Modal.Body>
            </form>
        </Modal >
    )
}

export default Create