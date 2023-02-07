import React, { lazy } from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Routes, Route } from "react-router-dom";

import Navbar from "../Nav";

const Dashboard = lazy(() => import('../../pages/dashboard/index.js'))
const EventManagement = lazy(() => import('../../pages/eventManagement/index.js'))
const Professors = lazy(() => import('../../pages/professors/index.js'))
const Student = lazy(() => import('../../pages/student/index.js'))
const Course = lazy(() => import('../../pages/course/index.js'))
// const Library = lazy(() => import('../Table/Table'))
// const Department = lazy(() => import('../Table/Table'))
// const Staff = lazy(() => import('../Table/Table'))

const Content = ({ sidebarIsOpen, toggleSidebar }) => (
    <Container
        fluid
        className={classNames("content", { "is-open": sidebarIsOpen })}
    >
        <Navbar toggleSidebar={toggleSidebar} />
        <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/event-management" element={<EventManagement />} />
            <Route exact path="/professors" element={<Professors />} />
            <Route exact path="/student" element={<Student />} />
            <Route exact path="/course" element={<Course />} />
            {/*<Route exact path="/library" element={<TableName />} />
            <Route exact path="/department" element={<TableName />} />
            <Route exact path="/staff" element={<TableName />} /> */}
        </Routes>
    </Container>
);

export default Content;
