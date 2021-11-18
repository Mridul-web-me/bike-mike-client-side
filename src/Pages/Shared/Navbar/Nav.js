import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';
import './Nav.css'

function Nav() {
    const { user, logOut } = useFirebase();
    const { admin } = useAuth();
    return (

        <div className="menu sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">
                        <i className="fas fa-motorcycle"></i>Bikes
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
                            <div className="dropdown">
                                <button className="btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    {
                                        user?.photoURL ? <img className="loginPhoto" src={user.photoURL} alt="" /> : <i className="fas fa-user"></i>
                                    }
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    {
                                        user?.email ?
                                            <ul>

                                                {
                                                    !admin && <div>
                                                        <Link
                                                            className="nav-link login "
                                                            to="/myOrder"
                                                        >My Order</Link>
                                                        <Link
                                                            className="nav-link login "
                                                            to="/payment"
                                                        >Payment</Link>
                                                        <Link
                                                            className="nav-link login "
                                                            to="/review"
                                                        >Review</Link>
                                                    </div>
                                                }
                                                {
                                                    admin && <div>
                                                        <Link
                                                            className="nav-link login "
                                                            to="/manageBike"
                                                        >Manage Bike</Link>

                                                        <Link
                                                            className="nav-link login "
                                                            to="/manageBooking"
                                                        >Manage All Bookings</Link>
                                                        <Link
                                                            className="nav-link login "
                                                            to="/addbike"
                                                        >Add Bike</Link>
                                                        <Link className="nav-link login " to="/makeadmin">Make Admin</Link>
                                                    </div>
                                                }
                                                <Link
                                                    className="nav-link login "
                                                    onClick={logOut} to="/"
                                                >Logout</Link>
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