import React from 'react'
import { Card, Col } from 'react-bootstrap'
import './Review.css'
import { FaStar } from 'react-icons/fa'

const Review = ({ review }) => {
    const { name, description, imgUrl } = review;
    const stars = Array(5).fill(0);
    const styles = {
        display: "flex",
        flexDirection: "column",
        alignItem: "center"
    }
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

                            <div style={styles.stars}>
                                {stars.map((_, index) => {
                                    return (
                                        <FaStar
                                            key={index}

                                        />

                                    )

                                })}

                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    )
}

export default Review
