import React from 'react';
import './Footer.css';
import logo from '../../Images/logo.png';
import fb from '../../Images/fi_facebook.png';
import ig from '../../Images/fi_instagram.png';
import twt from '../../Images/fi_twitter.png';
import email from '../../Images/fi_mail.png';
import twitch from '../../Images/fi_twitch.png';

const Footer = () => {
    return (
        <footer>
            <div className="container footer">
                <div className="flex-footer">
                    <div className="column1">
                        <ul>
                            <li>
                                <address>
                                    Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
                                </address>
                            </li>
                            <li>
                                <address>binarcarrental@gmail.com</address>
                            </li>
                            <li>
                                <address>081-233-334-808</address>
                            </li>
                        </ul>
                    </div>
                    <div className="column2">
                        <ul>
                            <li>
                                <a href="#">Our Services</a>
                            </li>
                            <li>
                                <a href="#">Why Us</a>
                            </li>
                            <li>
                                <a href="#">Testimonial</a>
                            </li>
                            <li>
                                <a href="#">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="column3">
                        <ul>
                            <li>Connect with us</li>
                        </ul>
                        <ul className="social-media">
                            <li>
                                <a href="">
                                    <img src={fb} alt="facebook" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src={ig} alt="instagram" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src={twt} alt="twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src={email} alt="email" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src={twitch} alt="twitch" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="column4">
                        <ul>
                            <li className="copyright">Copyright Binar 2022</li>
                            <li className="logo-footer">
                                <figure>
                                    <img src={logo} alt="Logo" />
                                </figure>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
