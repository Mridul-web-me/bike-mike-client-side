import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
// import { useForm } from "react-hook-form";
const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:8080/bikes', data)
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

export default AddService;