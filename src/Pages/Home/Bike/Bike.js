import React from 'react'
import './Bike.css'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import PlaceOrder from '../../PlaceOrder/PlaceOrder';
// import PlaceOrder from '../../PlaceOrder/PlaceOrder';

const Bike = ({ bike }) => {
    const { _id, name, imgUrl, price, engine, topSpeed, mileage } = bike;
    return (
        <div className="bike">
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
                    </Card.Body>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Launch demo modal
                    </button>
                    <PlaceOrder
                        bikes={bike}
                    ></PlaceOrder>
                </Card>
            </Col>
        </div>
    )
}

export default Bike;