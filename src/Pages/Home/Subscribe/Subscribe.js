import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import './Subscribe.css'
const Subscribe = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:8080/serviceEmail', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset();
                }
            })
    };
    return (
        <div className="subscribe">
            <div className="container">
                <div className="subscribe-content">
                    <div className="text-content">
                        <h3>Subscribe Our Newsletter</h3>
                        <h5>Subscribe newsletter to get offers and about new places to discover.</h5>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="serviceInput" {...register("email")} placeholder="Email" required />
                        <input type="submit" value="Subscribe" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Subscribe;