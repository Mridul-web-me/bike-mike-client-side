import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router'
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css'


const PlaceOrder = () => {
    const { bikeId } = useParams();
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth()
    const handleOnBlur = e => {

    }
    const [bikes, setBikes] = useState({});
    useEffect(() => {
        fetch(`https://floating-oasis-79529.herokuapp.com/bikes/${bikeId}`)
            .then(res => res.json())
            .then(data => setBikes(data));
        // console.log(data.name);
    }, [])

    const onSubmit = data => {
        console.log(data)
        axios.post('https://floating-oasis-79529.herokuapp.com/placeOrder', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('Order Place successfully')
                    reset();
                }
            })
    };

    return (

        <div className="placeOrder">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={bikes.imgUrl} className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <h2>{bikes.name}</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("productId")} defaultValue={bikes._id} disabled />
                            <input {...register("ProductName")} defaultValue={bikes.name} />
                            <input {...register("name")} onBlur={handleOnBlur} placeholder="name" />
                            <input {...register("email")} onBlur={handleOnBlur} placeholder={user.email} />
                            <input {...register("Phone")} onBlur={handleOnBlur} placeholder="Phone Number" />
                            <input {...register("price")} defaultValue={bikes.price} />
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PlaceOrder

