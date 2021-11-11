import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Bike from '../Bike/Bike';
import './Bikes.css'

const Bikes = () => {
    const [bikes, setBikes] = useState([]);
    useEffect(() => {
        fetch('https://floating-oasis-79529.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => setBikes(data));
    }, [])
    return (
        <div className="bikes">
            <div className="container">
                <div className="bikes-content">
                    <h1>Popular Bikes</h1>
                    <p>Suffered alteration in some form, by injected humour or good day randomised booth anim 8-bit hella wolf moon beard words.</p>
                </div>
                <Row xs={1} md={3} className="g-4">
                    {
                        bikes.map(bike => <Bike
                            key={bike._id}
                            bike={bike}
                        ></Bike>)
                    }
                </Row>
                <Link to='/morebikes'>
                    <button>More Bikes</button>
                </Link>
            </div>
        </div>
    )
}

export default Bikes;