import React from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import Hero from '../Components/Hero/Hero'
import './BinarCarRental.css'
import img_service from '../Images/img_service.png'
import fi_check from '../Images/fi_check.png'
import hour from '../Images/icon_24hrs.png'
import complete from '../Images/icon_complete.png'
import price from '../Images/icon_price.png'
import profes from '../Images/icon_professional.png'
import PieChart from '../Components/Chart/PieChart'

const BinarCarRental = () => {
    return (
        <>
            <Header />
            <Hero />
            <section id="our_services" className="services">
                <div className="flexservice">
                    <div className="imgservice">
                        <figure>
                            <img className="service-img" src={img_service} alt="Services" />
                        </figure>
                    </div>
                    <div className="desc">
                        <h3>Best Car Rental for any kind of trip in (Lokasimu)!</h3>
                        <p>
                            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
                        </p>
                        <ul>
                            <li className="service-list">
                                <img src={fi_check} alt="" />Sewa Mobil Dengan Supir di Bali 12 Jam
                            </li>
                            <li className="service-list">
                                <img src={fi_check} alt="" />Sewa Mobil Lepas Kunci di Bali 24 Jam
                            </li>
                            <li className="service-list">
                                <img src={fi_check} alt="" />Sewa Mobil Jangka Panjang Bulanan
                            </li>
                            <li className="service-list">
                                <img src={fi_check} alt="" />Gratis Antar - Jemput Mobil di Bandara
                            </li>
                            <li className="service-list">
                                <img src={fi_check} alt="" />Layanan Airport Transfer / Drop In Out
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="why_us" className="why-us">
                <div className="container">
                    <div className="judul">
                        <h3>Why Us?</h3>
                        <p>Mengapa harus pilih Binar Car Rental?</p>
                    </div>
                    <div className="flex-features">
                        <div className="features-box">
                            <figure><img src={complete} alt="" /></figure>
                            <h5>Mobil Lengkap</h5>
                            <p>
                                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
                            </p>
                        </div>
                        <div className="features-box">
                            <figure><img src={price} alt="" /></figure>
                            <h5>Harga Murah</h5>
                            <p>
                                Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain
                            </p>
                        </div>
                        <div className="features-box">
                            <figure><img src={hour} alt="" /></figure>
                            <h5>Layanan 24 Jam</h5>
                            <p>
                                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu
                            </p>
                        </div>
                        <div className="features-box">
                            <figure><img src={profes} alt="" /></figure>
                            <h5>Sopir Profesional</h5>
                            <p>
                                Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <PieChart />

            <section id="faq" className="faq">
                <div className="container faq-box">
                    <div className="flex-faq">
                        <div className="faq-text">
                            <h4>Frequently Asked Question</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <div className="faq-select">
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Apa saja syarat yang dibutuhkan?</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>
                                    Berapa hari minimal sewa mobil lepas kunci?
                                </option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>
                                    Berapa hari sebelumnya sabaiknya booking sewa mobil?
                                </option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Apakah Ada biaya antar-jemput?</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Bagaimana jika terjadi kecelakaan</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default BinarCarRental