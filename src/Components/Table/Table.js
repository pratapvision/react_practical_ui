import React, { useState } from 'react'
import Create from './Create'
import './table.css'

// import profile_icon from '../../../'

const Table = () => {

    const Static = [
        {
            id: '1',
            name: 'Sarah Smith',
            img: '/profile_icon.png',
            dept: 'Mechanical',
            deg: 'M.E',
            mobile: '9898989899',
            date: '12/5/2011'
        }
    ]

    const [Data, setData] = useState(Static)


    const handleUpdateState = (data, operation) => {
        if (operation === 1) {
            setData(prevState => ({
                Data: prevState.Data.filter(user => {
                    if (user.id === data.id)
                        return Object.assign(user, data)
                    else
                        return user

                })
            }))
            return
        }

        var new_user = Data.concat(data)
        setData({
            Data: new_user
        })

    }
    return (
        <div className="card mt-4">
            <div className="card-header">
                <h4 className="card-title float-left"> All Professors </h4>
                <div className='float-right'>
                    <i className="fa fa-refresh header-icon" aria-hidden="true" ></i>
                    <i className="fa fa-angle-down header-icon" aria-hidden="true" ></i>
                    <i className="fa fa-times header-icon" aria-hidden="true" ></i>
                </div >
            </div >
            <div className="card-header">
                <div className='float-left'>
                    <button type="button" className="btn btn-dark" data-toggle="modal" data-target="#addModal"> <b>+</b> Add User </button>
                    <i className="fa fa-search" aria-hidden="true" style={{ margin: "0px 10px 0px 30px" }}></i>
                    <span>Search : </span>
                    <input style={{ borderRadius: "10px", borderColor: "#fff" }} type="text" />
                </div>
                {/* <div> */}
                {/* </div> */}
                <div className='float-right title-side-drop' >
                    <spam className="color-white">Show</spam>
                    <spam className="color-white drop-ten">10</spam>
                    <i className="fa fa-angle-down color-white drop-icon" aria-hidden="true"></i>
                    <spam className="color-white entires">entires</spam>
                </div>
            </div>
            <div className="card-body">
                <div className="col-md-12">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th></th>
                                <th> Name <i className="fa fa-filter" aria-hidden="true" ></i> </th>
                                <th> Department <i className="fa fa-filter" aria-hidden="true" ></i> </th>
                                <th> Degree <i className="fa fa-filter" aria-hidden="true" ></i> </th>
                                <th> Mobile No. <i className="fa fa-filter" aria-hidden="true" ></i> </th>
                                <th> Joining Date <i className="fa fa-filter" aria-hidden="true" ></i> </th>
                                <th> Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {Data?.map((user, i) =>
                                <tr key={i}>
                                    <td> <img src={user?.img} height="40px" width="40px" /> </td>
                                    <td> {user?.name} </td>
                                    <td> {user?.dept} </td>
                                    <td> {user?.deg} </td>
                                    <td> {user?.mobile} </td>
                                    <td> {user?.date} </td>
                                    <td>
                                        {/* <button className="btn btn-info btn-sm mr-2" data-toggle="modal" data-target="#editModal"> Edit </button> */}
                                        <i className="fa fa-edit edit-icon" aria-hidden="true" ></i>
                                        <i className="fa fa-trash delete-icon" aria-hidden="true" ></i>
                                        {/* <button className="btn btn-danger btn-sm" > Delete </button> */}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <div>
                        <div className='float-left pagi-show'>
                            <strong>Showing 1 to 10 of 10 entires</strong>
                        </div>
                        <div className='float-right'>
                            <i className="fa fa-less-than pagi-icon" aria-hidden="true"></i>
                            <strong>01 </strong>
                            <i className="fa fa-greater-than pagi-icon" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
            <Create updateState={handleUpdateState} />
        </div >
    )
}

export default Table