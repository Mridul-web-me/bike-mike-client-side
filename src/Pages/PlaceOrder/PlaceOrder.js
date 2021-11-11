import React from 'react'
import { useParams } from 'react-router'

const PlaceOrder = ({ bikes }) => {
    const { _id } = useParams()
    // const { name } = bikes;
    return (
        <div>
            <h2>{_id}</h2>
            {/* <h2>{name}</h2> */}
        </div>
    )
}

export default PlaceOrder
