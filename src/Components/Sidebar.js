import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

import '../Components/sidebar.css'
import Navbar from './Nav';
import Table from './Table/Table';

const Sidebar = () => {
    return (
        <>
            <div className='d-flex' style={{ height: "100vh", position: 'relative', overflow: 'auto' }}>
                <CDBSidebar textColor="#000" backgroundColor="#fff">
                    <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
                        <span style={{ marginRight: "10px" }}> <img src="/vision-logo.png" alt="image" /></span>
                        <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                            Vision Education <br /> <p style={{ textAlign: 'center' }}>Hub</p>
                        </a>
                        <div className="form-group has-search">
                            <span className="fa fa-search form-control-feedback"></span>
                            <input type="text" className="form-control" placeholder="Search" />
                        </div>
                    </CDBSidebarHeader>

                    <CDBSidebarContent className="sidebar-content" >
                        {/* <div class="form-group has-search">
                        <span class="fa fa-search form-control-feedback"></span>
                        <input type="text" class="form-control" placeholder="Search" />
                    </div> */}
                        <CDBSidebarMenu>
                            <NavLink to="/" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to="/tables" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="table">Event Management</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to="/profile" activeClassName="activeClicked" >
                                <CDBSidebarMenuItem icon="user" className='side-back-pro'>Professors</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to="/analytics" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="user">Students</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to="/analytics" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="chart-line">Courses</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to="/analytics" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="book">Library</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to="/analytics" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="chart-line">Department</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to="/analytics" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="chart-line">Staff</CDBSidebarMenuItem>
                            </NavLink>

                        </CDBSidebarMenu>
                    </CDBSidebarContent>

                    <CDBSidebarFooter style={{ textAlign: 'center' }}>
                        <div
                            style={{
                                padding: '20px 5px',
                                marginBottom: '50px'
                            }}
                        >
                            <img src="/henna-beker.png" className='resp-img' alt="image" height="60px" width="60px" /><br />
                            <h4 className='resp-user-name'><b>Henna Bakar</b></h4>
                            {/* <span className='text-justify resp-user-name'>HennaBaker's@gmail.com</span><br /> */}
                            <img src="/set-img.png" alt="image" className='m-2' />
                            <img src="/logout.png" alt="image" className='m-2' />
                        </div>
                    </CDBSidebarFooter>
                </CDBSidebar>
                <main style={{ width: "100%", backgroundColor: "#F9F9FB" }}>
                    {/* <main> */}
                    <Navbar />
                    <Table />
                </main>
            </div >
        </>

    );
};

export default Sidebar;