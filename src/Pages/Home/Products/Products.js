import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import Bike from '../Bike/Bike';

const Products = () => {
    const [bikes, setBikes] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/bikes')
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
            </div>
        </div>
    )
}

export default Products
