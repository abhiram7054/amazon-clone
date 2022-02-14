import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home__image'
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />
                <div className="home__row">
                    <Product
                        id="12321341"
                        title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                        price={19.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        rating={3}
                    />
                    <Product
                        id="49538094"
                        title="Aucma Stand Mixer,6.5-QT 660W 6-Speed Tilt-Head Food Mixer, Kitchen Electric Mixer with Dough Hook, Wire Whip & Beater (6.5QT, Lavender)"
                        price={239.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125fgyZR5S.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Fitbit Charge 5 Advanced Fitness & Health Tracker with Built-in GPS, Stress Management Tools, Sleep Tracking, 24/7 Heart Rate and More, Black/Graphite, One Size (S &L Bands Included)"
                        price={199.99}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/41iag5vRGVL._AC_SL1001_.jpg"
                    />
                    <Product
                        id="4903850"
                        title="Echo (4th Gen) | With premium sound, smart home hub, and Alexa | Twilight Blue"
                        price={199.99}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/41JWadPO7DL._AC_.jpg"
                    />
                    <Product
                        id="4903850"
                        title="2021 Apple 11-inch iPad Pro (Wi‑Fi, 128GB) - Silver"
                        price={199.99}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/81MF389-9gS._AC_SL1500_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Samsung UN78KS9500 Curved 78-Inch 4K Ultra HD Smart LED TV (2016 Model)"
                        price={400}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/91f2b+oH3YL._AC_SL1500_.jpg"
                    />
                </div>

            </div>
        </div>
    )
}

export default Home