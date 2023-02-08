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
import emailIcon from '../../assest/Header/ClarityEmail.png'
import notificationIcon from '../../assest/Header/ClarityNotification.png'
import EnglishIcon from '../../assest/Header/EnglishIcon.png'
import './index.css'
import NotificationModal from "../../common/NavBar/Notification/NotificationModal";
import EmailModal from "../../common/NavBar/Email/EmailModal";

const NavbarHead = ({ toggleSidebar }) => {
    const [topBarIsOpen, setTopBarOpen] = useState(true);

    //navigation popup
    const [notificationModal, setNotificationModal] = useState(false)
    const [emailModal, setEmailModal] = useState(false)

    const toggleNotificationModal = () => setNotificationModal(!notificationModal);
    const toggleEmailModal = () => setEmailModal(!emailModal);
    const toggleTopBar = () => setTopBarOpen(!topBarIsOpen);

    return (
        <div>
            <Navbar
                color="light"
                light
                className="navbar p-2 mb-2 bg-white rounded"
                expand="md"
            >
                <Button color="" onClick={toggleSidebar}>
                    <FontAwesomeIcon icon={faAlignLeft} />
                </Button>
                <NavbarToggler onClick={toggleTopBar} />
                <Collapse isOpen={topBarIsOpen} navbar>
                    {/* <div className="card-title mx-3 leftSide">
                    <h4 className='font-weight-bold'> Education Dashboard </h4>
                    <label className="float-left">Welcome, Henna Baker's</label>
                </div>
                <div className='rightSide'>
                <img src={EnglishIcon} className='me-3' alt="image" />
                <label className="header-english me-3">English</label>
                <img className='me-3' src={notificationIcon} alt="image" />
                <img className='me-3' src={emailIcon} alt="image" />
                <img src="/profile_icon.png" className='me-2' alt="image" />
                    <span className="header-profile-name">Clay Johnson</span>
                </div > */}

                    <div className='card-body'>
                        <div className='float-left'>
                            <h4 className='font-weight-bold'> Education Dashboard </h4>
                            <label className="float-left">Welcome, Henna Baker's!</label>
                        </div>
                        <div className='float-right'>
                            <img src={EnglishIcon} className='me-3 float-left mt-2' alt="image" />
                            <label className="header-english me-3 float-left mt-3">English</label>
                            <img className='me-3 float-left mt-2' src={notificationIcon} alt="image" onClick={toggleNotificationModal} style={{ cursor: 'pointer' }} />
                            <img className='me-3 float-left mt-2' src={emailIcon} alt="image" onClick={toggleEmailModal} style={{ cursor: 'pointer' }} />
                            <img src="/profile_icon.png" className='me-2 float-left' alt="image" />
                            <span className="header-profile-name float-left mt-3">Clay Johnson</span>
                            <i className="fa fa-angle-down header-icon prof-drop-icon float-left mt-1" aria-hidden="true" ></i>
                            <NotificationModal
                                toggleNotificationModal={toggleNotificationModal}
                                notificationModal={notificationModal}
                            />
                            <EmailModal
                                toggleEmailModal={toggleEmailModal}
                                emailModal={emailModal}
                            />
                        </div>
                    </div>
                </Collapse>
            </Navbar>

        </div>
    );
};

export default NavbarHead;
