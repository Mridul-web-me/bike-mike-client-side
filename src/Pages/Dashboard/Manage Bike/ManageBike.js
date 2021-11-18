import React, { useEffect, useState } from 'react'

const ManageBike = () => {
    const [bikes, setBikes] = useState([])
    useEffect(() => {
        fetch('https://floating-oasis-79529.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])
    const handleDelete = id => {
        const url = `https://floating-oasis-79529.herokuapp.com/bikes/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Successfully Deleted')
                    const remaining = bikes.filter(bike => bike._id !== id);
                    setBikes(remaining);
                }

            })
    }
    return (
        <div>
            <h2>Manage Bike</h2>
            {
                bikes.map(bike => <div key={bike._id}>
                    <h3>{bike.email}</h3>
                    < button onClick={() => handleDelete(bike._id)} > Delete</button>
                </div>)

            }
        </div >
    )
}

export default ManageBike
