import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import './Nav.css'

function Nav() {
    const { user, logOut } = useFirebase();
    return (

        <div className="menu sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">
                        <i class="fas fa-motorcycle"></i>Bikes
                        <span className="red">Mikes</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/morebikes">More Product</Link>
                            </li>
                            <li className="nav-item dropdown">

                                <button className="drpbtn">Pages <i className="fas fa-sort-down" ></i></button>

                                <div className="dropdownItem">
                                    <Link className="nav-link" to="/destination">Popular Destination</Link>
                                    <Link className="nav-link" to="/elements">Elements</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">Review</Link>
                            </li>
                            <div class="dropdown">
                                <button class="btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fas fa-user"></i>
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    {
                                        user?.email ?
                                            <ul>
                                                <Link
                                                    className="nav-link login "
                                                    onClick={logOut} to="/"
                                                >Logout</Link>
                                                <Link
                                                    className="nav-link login "
                                                    to="/myBooking"
                                                >My Booking</Link>
                                                <Link
                                                    className="nav-link login "
                                                    to="/manageBooking"
                                                >Manage All Bookings</Link>
                                            </ul>

                                            :
                                            <Link className="nav-link login" to="/login">Login</Link>
                                    }

                                </ul>
                            </div>
                            <p className="m-2">{user.displayName}</p>
                        </ul>
                    </div>
                </div>
            </nav >
        </div >

    )
}

export default Nav;