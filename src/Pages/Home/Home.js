import React from 'react'
import Banner from './Banner/Banner'
import Bikes from './Bikes/Bikes'
import Reviews from './Reviews/Reviews'
import Subscribe from './Subscribe/Subscribe'
// import AddService from '../AddService/AddService'
import './Home.css'
import About from '../Shared/About/About'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Reviews></Reviews>
            {/* <AddService></AddService> */}
            <Bikes></Bikes>
            <About></About>
            <Subscribe></Subscribe>
        </div>
    )
}

export default Home
