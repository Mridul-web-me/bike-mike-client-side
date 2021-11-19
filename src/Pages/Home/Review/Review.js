import React from 'react'
import { Card, Col } from 'react-bootstrap'
import './Review.css'
import Rating from 'react-rating'

const Review = ({ review }) => {
    const { name, description, imgUrl, rating } = review;

    return (
        <div className="review">
            <Col>
                <Card>
                    <Card.Img variant="top" src={imgUrl} />
                    <Card.Body>
                        <div className="body1">
                            <div className="h3">{name}</div>
                        </div>
                        <div className="bodyText">
                            <Card.Text>{description}</Card.Text>

                            <Rating
                                emptySymbol="fa fa-star-o fa-2x"
                                fullSymbol="fa fa-star fa-2x"
                                initialRating={rating}
                                readonly
                            />

                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    )
}

export default Review
