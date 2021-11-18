import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import './AddBike.css'
// import { useForm } from "react-hook-form";
const AddBike = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        axios.post('https://floating-oasis-79529.herokuapp.com/bikes', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset();
                }
            })
    };
    return (
        <div className="addBike">
            <h2>Add Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="name" />
                <input {...register("engine")} placeholder="Engine" />
                <input {...register("topSpeed")} placeholder="Top Speed" />
                <input {...register("mileage")} placeholder="Mileage" />
                <input {...register("price")} placeholder="price" />
                <input {...register("imgUrl")} placeholder="Image Url" />
                <input type="submit" />
            </form>
        </div>
    )
}

export default AddBike;