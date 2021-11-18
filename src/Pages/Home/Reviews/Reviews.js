import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://floating-oasis-79529.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div className="reviews">
            <div className="container">
                <div className="review-content">
                    <h1>Customer Review</h1>
                    <p>Suffered alteration in some form, by injected humour or good day randomised booth anim 8-bit hella wolf moon beard words.</p>
                </div>
                <Row xs={1} md={3} className="g-4">
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </Row>
            </div>
        </div>
    )
}

export default Reviews
