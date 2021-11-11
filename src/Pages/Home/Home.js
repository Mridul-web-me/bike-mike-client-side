import React from 'react'
import AddService from '../AddService/AddService'
import Banner from './Banner/Banner'
import Bikes from './Bikes/Bikes'
import Reviews from './Reviews/Reviews'
import Subscribe from './Subscribe/Subscribe'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Reviews></Reviews>
            <AddService></AddService>
            <Bikes></Bikes>
            <Subscribe></Subscribe>
        </div>
    )
}

export default Home
