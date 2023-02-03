import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import {
    Navbar,
    Button,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";

import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import ClarutyEmail from '../../assest/Header/ClarityEmail.png'
import ClarutyNotification from '../../assest/Header/ClarityNotification.png'
import EnglishIcon from '../../assest/Header/EnglishIcon.png'
import './index.css'

const NavbarHead = ({ toggleSidebar }) => {
    const [topbarIsOpen, setTopbarOpen] = useState(true);
    const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

    return (
        <Navbar
            color="light"
            light
            className="navbar p-2 mb-3 bg-white rounded"
            expand="md"
        >
            <Button color="" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faAlignLeft} />
            </Button>
            <NavbarToggler onClick={toggleTopbar} />
            <Collapse isOpen={topbarIsOpen} navbar>
                {/* <div className="card-title mx-3 leftSide">
                    <h4 className='font-weight-bold'> Education Dashboard </h4>
                    <label className="float-left">Welcome, Henna Baker's</label>
                </div>
                <div className='rightSide'>
                    <img src={EnglishIcon} className='me-3' alt="image" />
                    <label className="header-english me-3">English</label>
                    <img className='me-3' src={ClarutyNotification} alt="image" />
                    <img className='me-3' src={ClarutyEmail} alt="image" />
                    <img src="/profile_icon.png" className='me-2' alt="image" />
                    <span className="header-profile-name">Clay Johnson</span>
                </div > */}

                <div className='card-body'>
                    <div className='float-left'>
                        <h4 className='font-weight-bold'> Education Dashboard </h4>
                        <label className="float-left">Welcome, Henna Baker's!</label>
                    </div>
                    <div className='float-right'>
                        <img src={EnglishIcon} className='me-3' alt="image" />
                        <label className="header-english me-3">English</label>
                        <img className='me-3' src={ClarutyNotification} alt="image" />
                        <img className='me-3' src={ClarutyEmail} alt="image" />
                        <img src="/profile_icon.png" className='me-2' alt="image" />
                        <span className="header-profile-name">Clay Johnson</span>
                        <i className="fa fa-angle-down header-icon prof-drop-icon" aria-hidden="true" ></i>

                    </div>
                </div>
            </Collapse>
        </Navbar>
    );
};

export default NavbarHead;
