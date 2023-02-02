import React, { lazy } from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Routes, Route } from "react-router-dom";

import Navbar from "../Nav";

const TableName = lazy(() => import('../Table/Table'))
const Dashboard = lazy(() => import('../../pages/dashboard/index.js'))
const EventManagement = lazy(() => import('../Table/Table'))
const Professors = lazy(() => import('../Table/Table'))
const Student = lazy(() => import('../Table/Table'))
const Course = lazy(() => import('../Table/Table'))
const Library = lazy(() => import('../Table/Table'))
const Department = lazy(() => import('../Table/Table'))
const Staff = lazy(() => import('../Table/Table'))

const Content = ({ sidebarIsOpen, toggleSidebar }) => (
    <Container
        fluid
        className={classNames("content", { "is-open": sidebarIsOpen })}
    >
        <Navbar toggleSidebar={toggleSidebar} />
        <Routes>
            <Route exact path="/" element={<TableName />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/event-management" element={<TableName />} />
            <Route exact path="/professors" element={<TableName />} />
            <Route exact path="/student" element={<TableName />} />
            <Route exact path="/course" element={<TableName />} />
            <Route exact path="/library" element={<TableName />} />
            <Route exact path="/department" element={<TableName />} />
            <Route exact path="/staff" element={<TableName />} />
        </Routes>
    </Container>
);

export default Content;
