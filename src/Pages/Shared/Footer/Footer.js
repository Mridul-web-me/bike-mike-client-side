import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../../img/banner/img3.jpg"
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="address">
                            <Link className="navbar-brand" to="/home">
                                <i className="fas fa-motorcycle"></i>
                                Bikes<span>Mikes</span>
                            </Link>
                            <p><i className="fas fa-map-marker-alt"></i>
                                Level-4, 06,  Parimal Tower, N.S Road, Kushtia
                            </p>

                            <p>
                                <i className="fas fa-phone-alt"></i>
                                +880 1312 812128
                            </p>
                            <p><i className="fas fa-envelope"></i>
                                contact@bikesmikes.com
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h2 className="text-white">Company</h2>
                        <div className="companyLink">
                            <Link to="/">Pricing</Link>
                            <Link to="/">About</Link>
                            <Link to="/">Gallery</Link>
                            <Link to="/">Contact</Link>
                        </div>
                    </div>
                    <div className="col-md-3 popular">
                        <h2 className="text-white">Popular Bikes</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <Link to="/">Suzuki</Link>
                                <Link to="/">Honda</Link>
                                <Link to="/">TVS</Link>
                                <Link to="/">Kawasaki</Link>
                            </div>
                            <div className="col-md-6">
                                <Link to="/">Lifan</Link>
                                <Link to="/">Hero</Link>
                                <Link to="/">KTM</Link>
                                <Link to="/">Bajaj</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 my-6">
                        <img src={img} className="img-fluid" alt="" />
                    </div>
                </div>
                <br />
                <br />
                <hr />
                <br />
                <p className="text-white">Copyright ©2021 All rights reserved</p>
            </div>
        </div >
    )
}

export default Footer
