import React from 'react'

import TotalStudent from '../../assest/Dashboard/TotalStudent.png'

const HeadingCards = () => {

    const Data = [
        {
            name: 'Total Students',
            img: TotalStudent,
            number: 2000,
        },
        {
            name: 'Total Students',
            img: TotalStudent,
            number: 2000,
        },
        {
            name: 'Total Students',
            img: TotalStudent,
            number: 2000,
        },
        {
            name: 'Total Students',
            img: TotalStudent,
            number: 2000,
        },
    ]
    console.log('Data', Data)
    return (
        <div className='pt-2 d-flex card-group '>
            {Data?.map((val) => (
                <div className=' card shadow-sm px-3 me-3 bg-white rounded'>
                    <div className='card-body'>
                        <h5 className='card-title'>{val?.name}</h5>
                        <p className='card-text'>{val?.number}</p>
                    </div>
                    <div className='float-right mb-3'>
                        <img src={val?.img} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default HeadingCards