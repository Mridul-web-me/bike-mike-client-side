import React, { useEffect, useState } from 'react'

const MyBooking = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://floating-oasis-79529.herokuapp.com/placeOrder')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const handleDelete = id => {
        const url = `https://floating-oasis-79529.herokuapp.com/placeOrder/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Successfully Deleted')
                    const remaining = orders.filter(bike => bike._id !== id);
                    setOrders(remaining);
                }

            })
    }
    return (
        <div>
            <h2>Manage Bike</h2>
            {
                orders.map(order => <div key={order._id}>
                    <h3>{order.email}</h3>
                    < button onClick={() => handleDelete(order._id)} > Delete</button>
                </div>)

            }
        </div >
    )
}

export default MyBooking
