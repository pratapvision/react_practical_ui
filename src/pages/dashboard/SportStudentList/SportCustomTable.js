import React from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { Table } from 'reactstrap'

const TableData = [
    {
        studentName: 'John Wick',
        assignCoach: 'Harris',
        date: '12/05/2022',
        time: '11:15',
        action: <>
            <div className='rounded text-white p-2' style={{ backgroundColor: '#FD9C40' }}>Action <FaAngleDown /></div>
        </>
    },
    {
        studentName: 'John Wick',
        assignCoach: 'Harris',
        date: '12/05/2022',
        time: '11:15',
        action: <>
            <div className='rounded text-white p-2' style={{ backgroundColor: '#3F8DFD' }}>Action <FaAngleDown /></div>
        </>
    },
    {
        studentName: 'John Wick',
        assignCoach: 'Harris',
        date: '12/05/2022',
        time: '11:15',
        action: <>
            <div className='rounded text-white p-2' style={{ backgroundColor: '#FF6E6E' }}>Action <FaAngleDown /></div>
        </>
    },
    {
        studentName: 'John Wick',
        assignCoach: 'Harris',
        date: '12/05/2022',
        time: '11:15',
        action: <>
            <div className='rounded text-white p-2' style={{ backgroundColor: '#333340' }}>Action <FaAngleDown /></div>
        </>
    },
]

const SportCustomTable = ({
    requestSort,
    getClassNamesFor,
}) => {
    return (
        <Table className="table">
            <thead className='bg-light'>
                <tr>
                    <th className='p-3 text-center'>Select</th>
                    <th className='p-3 text-center'>
                        <label className='me-3'>
                            Student Name
                        </label>
                        {/* <label onClick={() => requestSort('productName')} className={getClassNamesFor('productName')} >
                            <i className="fa fa-sort" aria-hidden="true" />
                        </label> */}
                    </th>
                    <th className='p-3 text-center'>
                        <label className='me-3'>
                            Assigned Coach
                        </label>
                        {/* <label onClick={() => requestSort('productName')} className={getClassNamesFor('productName')} >
                            <i className="fa fa-sort" aria-hidden="true" />
                        </label> */}
                    </th>
                    <th className='p-3 text-center'>
                        <label className='me-3'>
                            Date
                        </label>
                        {/* <label onClick={() => requestSort('productName')} className={getClassNamesFor('productName')} >
                            <i className="fa fa-sort" aria-hidden="true" />
                        </label> */}
                    </th>
                    <th className='p-3 text-center'>
                        <label className='me-3'>
                            Time
                        </label>
                        {/* <label onClick={() => requestSort('productName')} className={getClassNamesFor('productName')} >
                            <i className="fa fa-sort" aria-hidden="true" />
                        </label> */}
                    </th>
                    <th className='p-3 text-center'>Action</th>
                </tr>
            </thead>
            <tbody>
                {TableData?.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td className='p-3 text-center'><input type='checkbox' /></td>
                            <td className='p-3 text-center'>{item?.studentName}</td>
                            <td className='p-3 text-center'>{item?.assignCoach}</td>
                            <td className='p-3 text-center'>{item?.date}</td>
                            <td className='p-3 text-center'>{item?.time}</td>
                            <td className='p-3 text-center'>{item?.action}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default SportCustomTable