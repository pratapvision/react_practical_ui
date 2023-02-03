import React from 'react'
import HeadingCards from './HeadingCards/HeadingCards'
import SportStudentList from './SportStudentList/SportStudentList'
import SubjectMarkChat from './SubjectMarkChart/SubjectMarkChat'

const Dashboard = () => {
    return (
        <div className='bg-light rounded px-3 pb-3'>
            <HeadingCards />
            <SportStudentList />
            <SubjectMarkChat />
        </div>
    )
}

export default Dashboard