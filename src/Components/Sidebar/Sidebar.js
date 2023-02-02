import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTable,
    faCalendarCheck,
    faUser,
    faUserCircle,
    faBook,
    faBookOpen,
    faShoppingBag,
    faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import './sidebar.css'

import SubMenu from './SubMenu';

import setImg from '../../assest/Sidebar/setImg.png'
import logout from '../../assest/Sidebar/logout.png'
// import hennaBekar from '../../assest/Sidebar/hennaBekar.png'
import hennaBekar from '../../assest/Sidebar/hennaBeker.png'


const Sidebar = ({ isOpen, toggle }) => (
    <div className={classNames("sidebar", { "is-open": isOpen })}>
        <div className="sidebar-header">
            <span color="info" onClick={toggle} style={{ color: "#000" }}>
                &times;
            </span>
            <div className='text-center m-3 px-3'>
                <img src="/vision-logo.png" alt="image" />
                <h4 > Vision Education Hub</h4>
            </div>
            <div className="form-group has-search px-3">
                <span className="fa fa-search form-control-feedback"></span>
                <input type="text" className="form-control" placeholder="Search" />
            </div>
        </div>
        <hr />
        <div className="side-menu">
            <Nav vertical className="list-unstyled pb-3">
                <NavItem>
                    <NavLink tag={Link} to={"/dashboard"}>
                        <FontAwesomeIcon icon={faTable} className="me-2" />
                        Dashboard
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={"/event-management"}>
                        <FontAwesomeIcon icon={faCalendarCheck} className="me-2" />
                        Event Management
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={"/professors"}>
                        <FontAwesomeIcon icon={faUser} className="me-2" />
                        Professors
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink tag={Link} to={"/student"}>
                        <FontAwesomeIcon icon={faUserCircle} className="me-2" />
                        Student
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink tag={Link} to={"/course"}>
                        <FontAwesomeIcon icon={faBook} className="me-2" />
                        Course
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink tag={Link} to={"/library"}>
                        <FontAwesomeIcon icon={faBookOpen} className="me-2" />
                        Library
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink tag={Link} to={"/department"}>
                        <FontAwesomeIcon icon={faShoppingBag} className="me-2" />
                        Department
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink tag={Link} to={"/staff"}>
                        <FontAwesomeIcon icon={faCheckCircle} className="me-2" />
                        Staff
                    </NavLink>
                </NavItem>

                <div className='mt-5 px-3 text-center' >
                    <img src={hennaBekar} className='resp-img' alt="image" height="100px" width="100px" />
                    <h4 className='resp-user-name'><b>Henna Bakar</b></h4>
                    <span className='text-justify resp-user-name'>HennaBaker's@gmail.com</span><br />
                    <img src={setImg} alt="image" className='m-2' />
                    <img src={logout} alt="image" className='m-2' />
                </div>

                {/* <SubMenu title="Student" icon={faUser} items={submenus[1]} />
                <SubMenu title="Course" icon={faUser} items={submenus[1]} />
                <SubMenu title="Library" icon={faUser} items={submenus[1]} />
                <SubMenu title="Department" icon={faUser} items={submenus[1]} />
                <SubMenu title="Staff" icon={faUser} items={submenus[1]} /> */}
            </Nav>
        </div>
    </div>
);

const submenus = [
    [
        {
            title: "Home 1",
            target: "Home-1",
        },
        {
            title: "Home 2",
            target: "Home-2",
        },
        {
            itle: "Home 3",
            target: "Home-3",
        },
    ],
    [
        {
            title: "Page 1",
            target: "Page-1",
        },
        {
            title: "Page 2",
            target: "Page-2",
        },
    ],
];

export default Sidebar;