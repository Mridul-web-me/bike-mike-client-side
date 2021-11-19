import React, { useState } from 'react'
import { Card, Col } from 'react-bootstrap';
import './ManageSingleBike.css'
const ManageSingleBike = ({ bike }) => {
    const [bikes, setBikes] = useState([])
    const { name, imgUrl, engine, topSpeed, mileage, price } = bike;
    const handleDelete = id => {
        const url = `https://floating-oasis-79529.herokuapp.com/bikes/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Successfully Deleted')
                    const remaining = bikes.filter(bike => bike._id !== id);
                    setBikes(remaining);
                }
            })
    }
    return (
        <div className="manageSingleBike">
            <Col>
                <Card>
                    <Card.Img variant="top" src={imgUrl} />
                    <Card.Body>
                        <div className="body1">
                            <div className="h3">{name}</div>
                        </div>
                        <div className="bodyText">
                            <Card.Text>Engine:</Card.Text>
                            <Card.Text> {engine}</Card.Text>
                        </div>
                        <div className="bodyText">
                            <Card.Text>Top Speed:</Card.Text>
                            <Card.Text> {topSpeed}</Card.Text>
                        </div>
                        <div className="bodyText">
                            <Card.Text>Mileage:</Card.Text>
                            <Card.Text> {mileage}</Card.Text>
                        </div>
                        <div className="bodyText">
                            <Card.Text>Price:</Card.Text>
                            <Card.Text> {price}</Card.Text>
                        </div>
                        < button onClick={() => handleDelete(bike._id)} className="btn btn-danger"> Delete</button>
                    </Card.Body>

                </Card>

            </Col>
        </div>
    )
}

export default ManageSingleBike
