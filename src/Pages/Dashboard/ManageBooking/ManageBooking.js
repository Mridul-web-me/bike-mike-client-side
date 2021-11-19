import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './ManageBooking.css'
// import './MyOrder.css'

const ManageBooking = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://floating-oasis-79529.herokuapp.com/placeOrder')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    // const handleDelete = id => {
    //     const url = `https://floating-oasis-79529.herokuapp.com/placeOrder/${id}`;
    //     fetch(url, {
    //         method: "DELETE"
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.deletedCount) {
    //                 alert('Successfully cancelled')
    //                 const remaining = orders.filter(bike => bike._id !== id);
    //                 setOrders(remaining);
    //             }

    //         })
    // }
    return (
        <div className="myOrder">
            <div className="container">
                <h2 className="my-4">All Order</h2>
                {
                    orders.map(order => <div key={order._id}>
                        <div className="orderItem">
                            <h5>{order.ProductName}</h5>
                            <h5>{order.price}</h5>
                            <h5>{order.Phone}</h5>
                            <div className="status-btn">
                                <Link to={`/orders/update/${order._id}`}>
                                    <button className='btn btn-danger mb-2'>Update Status</button>
                                </Link>
                                < button className="btn btn-danger" > Shipped</button>
                            </div>
                        </div>

                    </div>)

                }
            </div >
        </div >
    )
}

export default ManageBooking
