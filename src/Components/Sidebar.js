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

const Sidebar = () => {
    return (
        <>
            <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
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
                            <NavLink exact to="/" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/tables" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="table">Event Management</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/profile" activeClassName="activeClicked" >
                                <CDBSidebarMenuItem icon="user" className='side-back-pro'>Professors</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/analytics" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="user">Students</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/analytics" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="chart-line">Courses</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/analytics" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="book">Library</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/analytics" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="chart-line">Department</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/analytics" activeClassName="activeClicked">
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
                            <img src="/henna-beker.png" alt="image" height="80px" width="80px" /><br />
                            <h4><b>Henna Bakar's</b></h4>
                            <span>HennaBaker's@gmail.com</span><br />
                            <img src="/set-img.png" alt="image" height="40px" style={{ marginRight: "15px" }} />
                            <img src="/logoutt.png" alt="image" height="40px" />
                        </div>
                    </CDBSidebarFooter>
                </CDBSidebar>
            </div >
        </>

    );
};

export default Sidebar;