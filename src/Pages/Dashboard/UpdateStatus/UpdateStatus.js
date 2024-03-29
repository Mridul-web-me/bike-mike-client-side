import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const UpdateStatus = () => {
    const [order, setOrder] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const url = `https://floating-oasis-79529.herokuapp.com/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, []);


    const handleStatusChange = e => {
        const updateStatus = e.target.value;
        const updatedStatus = { status: updateStatus };
        setOrder(updatedStatus)
    }
    const handleUpdateStatus = e => {
        const url = `https://floating-oasis-79529.herokuapp.com/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated successfully');
                    setOrder({});
                }
            });


        e.preventDefault();
    }


    return (
        <div className='my-5'>
            <h1 className='text-danger mb-3'>Update Status</h1>
            <form onSubmit={handleUpdateStatus}>
                <input onChange={handleStatusChange} type="text" value={order.status || ""} />
                <input type="submit" className="btn btn-secondary mx-4" value='Update' />
            </form>
            <Link to='/manageOrder'>
                <button className='my-3 px-5 btn btn-warning'>Back</button>
            </Link>
        </div>
    );
};

export default UpdateStatus;