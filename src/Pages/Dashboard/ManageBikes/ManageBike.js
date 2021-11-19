import React, { useEffect, useState } from 'react'
// import { Card, Col } from 'react-bootstrap'
import ManageSingleBike from '../ManageSingleBike/ManageSingleBike'
import './ManageBike.css'

const ManageBike = () => {
    const [bikes, setBikes] = useState([])
    useEffect(() => {
        fetch('https://floating-oasis-79529.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])

    return (
        <div className="manageBikes">
            <h2>Manage Bike</h2>
            {
                bikes.map(bike => <ManageSingleBike key={bike._id} bike={bike}>
                </ManageSingleBike>)

            }
        </div >
    )
}

export default ManageBike
