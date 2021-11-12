import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import './Subscribe.css'
const Subscribe = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://floating-oasis-79529.herokuapp.com/serviceEmail', data)
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
                    <div className="row">
                        <div className="col-md-6">
                            <div className="text-content">
                                <h3>Subscribe Our Newsletter</h3>
                                <h5>Subscribe newsletter to get offers and about new places to discover.</h5>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className="serviceInput" {...register("email")} placeholder="Email" required />
                                <input type="submit" value="Subscribe" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe;