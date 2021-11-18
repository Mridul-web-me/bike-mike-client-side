import React from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form';
const Reviews = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        axios.post('https://floating-oasis-79529.herokuapp.com/review', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset();
                }
            })
    };
    return (
        <div>
            <div>
                <h2>Give Your Feedback</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} placeholder="name" />
                    <input {...register("description")} placeholder="description" />
                    <input type="number" minlength="5"{...register("rating")} placeholder="rating" />
                    <input {...register("imgUrl")} placeholder="Image Url" />
                    <input type="submit" />
                </form>
            </div>
        </div>
    )
}

export default Reviews
