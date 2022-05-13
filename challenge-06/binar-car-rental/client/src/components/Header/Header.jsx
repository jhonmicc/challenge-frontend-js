import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from '../../assets/images/logo.png'
import './Header.css';

import { logout } from '../../actions/auth';
import { clearMessage } from '../../actions/message';

import { history } from "../../helpers/history";

// import AuthVerify from "./common/AuthVerify";
import EventBus from "../../common/EventBus";

const Header = () => {


    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);

    const { user: currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location) => {
            dispatch(clearMessage()); // clear message when changing location
        });
    }, [dispatch]);

    const logOut = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    useEffect(() => {
        if (currentUser) {
            setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
            setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
        } else {
            setShowModeratorBoard(false);
            setShowAdminBoard(false);
        }

        EventBus.on("logout", () => {
            logOut();
        });

        return () => {
            EventBus.remove("logout");
        };
    }, [currentUser, logOut]);


    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-xl">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="Logo" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">
                            <a className="nav-link" href="#our_services">
                                Our Services
                            </a>
                            <a className="nav-link" href="#why_us">
                                Why Us
                            </a>
                            <a className="nav-link" href="#testimonial">
                                Testimonial
                            </a>
                            <a className="nav-link" href="#faq">
                                FAQ
                            </a>
                            <a className="nav-link tombol" href="/login" onClick={logOut}>
                                Logout
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header