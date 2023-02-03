import React from 'react'

import ProgressBar from './Progress_bar'
import TotalStudent from '../../../assest/Dashboard/TotalStudent.png'
import NewStudent from '../../../assest/Dashboard/NewStudent.png'
import TotalCourse from '../../../assest/Dashboard/TotalCourse.png'
import Visitors from '../../../assest/Dashboard/Visitors.png'

import '../index.css'

const HeadingCards = () => {

    const Data = [
        {
            name: 'Total Student',
            img: TotalStudent,
            number: <p className='heading-card-number-one'>2000</p>,
            progress: <ProgressBar bgcolor="#3F8DFD" progress='30' height={7} />
        },
        {
            name: 'New Student',
            img: NewStudent,
            number: <p className='heading-card-number-two'>500</p>,
            progress: <ProgressBar bgcolor="#803FFD" progress='60' height={7} />
        },
        {
            name: 'Total Course',
            img: TotalCourse,
            number: <p className='heading-card-number-three'>40</p>,
            progress: <ProgressBar bgcolor="#C73FFD" progress='50' height={7} />
        },
        {
            name: 'Visitors Member',
            img: Visitors,
            number: <p className='heading-card-number-four'>2000</p>,
            progress: <ProgressBar bgcolor="#FD683F" progress='85' height={7} />
        },
    ]
    return (
        <div className='pt-2 card-group '>
            {Data?.map((val, i) => (
                <div key={i} className=' card shadow-sm px-2 me-3 bg-white rounded'>
                    <div className='card-body'>
                        <div style={{ float: 'left' }}>
                            <h5 className='card-title'>{val?.name}</h5>
                            <p className='card-text'>{val?.number}</p>
                            <div>{val?.progress}</div>
                        </div>
                        <div style={{ float: 'right' }} className='mt-2'>
                            <img src={val?.img} height="100px" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default HeadingCards