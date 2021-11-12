import React from 'react'
import img from '../../../img/banner/img2.jpg'
import './About.css'
const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 about-text">
                        <h1 className="text-start my-8">ABOUT US</h1>
                        <p>Honda is a Japanese publicmultinational conglomerate corporation primarily known as a manufacturer of automobiles, aircraft, motorcycles, and power equipment.

                            Honda has been the world's largest motorcycle manufacturer since 1959,as well as the world's largest manufacturer of internal combustion engines measured by volume, producing more than 14 million internal combustion engines each year. Honda became the second-largest Japanese automobile manufacturer in 2001. Honda was the eighth largest automobile manufacturer in the world behind General Motors, Volkswagen Group, Toyota, Hyundai Motor Group, Ford, Nissan, and PSA Peugeot Citroën in 2011.</p>
                        <p>Honda was the first Japanese automobile manufacturer to release a dedicated luxury brand, Acura, in 1986. Aside from their core automobile and motorcycle businesses, Honda also manufactures garden equipment, marine engines, personal watercraft and power generators, and other products. Since 1986, Honda has been involved with artificial intelligence/robotics research and released their ASIMO robot in 2000. They have also ventured into aerospace with the establishment of GE Honda Aero Engines in 2004 and the Honda HA-420 HondaJet, which began production in 2012.

                            In 2013, Honda became the first Japanese automaker to be a net exporter to the United States, exporting 108,705 Honda and Acura models, while importing only 88,357.</p>
                    </div>
                    <div className="col-md-6 right-bike">
                        <img src={img} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
