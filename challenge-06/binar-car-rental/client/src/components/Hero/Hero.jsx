import React from 'react'
import './Hero.css';
import car_hero from '../../assets/images/img_car.png'

const Hero = ({ children }) => {
    return (
        <>
            <section className="hero">
                <div className="container flex">
                    <div className="texthero">
                        <h2>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h2>
                        <p>
                            Selamat datang di Binar Car Rental. Kami menyediakan mobil
                            kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                            kebutuhanmu untuk sewa mobil selama 24 jam.
                        </p>
                    </div>
                </div>
                <div className="imgright">
                    <figure>
                        <img className="car" src={car_hero} alt="Car" />
                    </figure>
                </div>
            </section>
            {children}
        </>
    )
}

export default Hero