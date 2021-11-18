import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router'
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
// import { useParams } from 'react-router'
// import { useParams } from 'react-router'

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
                    alert('added successfully')
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("productId")} value={bikes._id} disabled />
                            <input {...register("ProductName")} value={bikes.name} disabled />
                            <input {...register("name")} onBlur={handleOnBlur} placeholder="name" />
                            <input {...register("email")} onBlur={handleOnBlur} placeholder={user.email} />
                            <input {...register("Phone")} onBlur={handleOnBlur} placeholder="Phone Number" />
                            <input {...register("price")} value={bikes.price} disabled />
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PlaceOrder

