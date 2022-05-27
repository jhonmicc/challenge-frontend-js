import React from 'react'
import Header from '../Components/Header/Header'
import styled from 'styled-components'
import { Container } from 'reactstrap'
import back from '../Images/fi_arrow-left.png'
import satu from '../Images/satu.png'
import dua_unfilled from '../Images/dua_unfilled.png'
import tiga_unfilled from '../Images/tiga_unfilled.png'
import Footer from '../Components/Footer/Footer'
import { Button } from 'reactstrap'

import { FiUsers } from 'react-icons/fi';
import { FiSettings } from 'react-icons/fi';
import { AiOutlineCalendar } from 'react-icons/ai';

const Tickethero = styled.section`
    height: 20vh;
    background-color: #f1f3ff;
`

const Step = styled.div`
    width: 34px;
    height: 2px;
    background: #0D28A6;
`

const Detailpesanan = styled.div`
    padding: 24px;
    background: #ffffff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    margin-top: 3em;
`
const Detailbank = styled.div`
    padding: 24px;
    background: #ffffff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    margin-top: 3em;
`

const DetailLightText = styled.p`
    font-weight: 300;
    font-size: 1em;
    line-height: 20px;
    color: #8A8A8A;
`

const Pembayaran = () => {
    return (
        <>
            <Header />
            <Tickethero>
                <Container className='d-flex pt-5 justify-content-between step-metode'>
                    <div className="go-back">
                        <img src={back} alt="" />
                        <span className='fw-bold'>Pembayaran</span>
                    </div>
                    <div className="step-metode d-flex">
                        <div className="pilih-metode">
                            <img className='me-1' src={satu} alt="" />
                            Pilih Metode
                        </div>
                        <Step className='ms-3 me-3' />
                        <div className="pilih-metode">
                            <img className='me-1' src={dua_unfilled} alt="" />
                            Bayar
                        </div>
                        <Step className='ms-3 me-3' />
                        <div className="pilih-metode">
                            <img className='me-1' src={tiga_unfilled} alt="" />
                            Tiket
                        </div>
                    </div>
                </Container>
                <Container>
                    <Detailpesanan>
                        <h6>Detail Pesananmu</h6>
                        <div className="d-flex justify-content-between align-items-start">
                            <div className="tipe_driver">
                                <p className='fw-normal'>Tipe Driver</p>
                                <DetailLightText>
                                    Dengan Sopir
                                </DetailLightText>
                            </div>
                            <div className="tipe_driver">
                                <p className='fw-normal'>Tanggal</p>
                                <DetailLightText>
                                    27 Mar 2022
                                </DetailLightText>
                            </div>
                            <div className="tipe_driver">
                                <p className='fw-normal'>Waktu Jemput/Antar</p>
                                <DetailLightText>
                                    10.00 WIB
                                </DetailLightText>
                            </div>
                            <div className="tipe_driver">
                                <p className='fw-normal'>Jumlah Penumpang (opsional)</p>
                            </div>
                        </div>
                    </Detailpesanan>
                </Container>
                <Container className='d-flex justify-content-between align-items-start gap-4'>
                    <Detailbank>
                        <h6>Pilih Bank Transfer</h6>
                        <p>Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking</p>
                        <div className="d-flex align-items-baseline">
                            <Button outline className='me-2'>
                                BCA
                            </Button>
                            <p>BCA Transfer</p>
                        </div>
                        <hr />
                        <div className="d-flex align-items-baseline">
                            <Button outline className='me-2'>
                                BNI
                            </Button>
                            <p>BNI Transfer</p>
                        </div>
                        <hr />
                        <div className="d-flex align-items-baseline">
                            <Button outline className='me-2'>
                                Mandiri
                            </Button>
                            <p>Mandiri Transfer</p>
                        </div>
                    </Detailbank>
                    <Detailpesanan className='flex-grow-1'>
                        <h6>Nama/Tipe Mobil</h6>
                        <ul class="car-detail">
                            <li class="d-flex align-items-center">
                                <FiUsers />
                                4 Orang
                            </li>
                            <li class="d-flex align-items-center">
                                <FiSettings />
                                Manual
                            </li>
                            <li class="d-flex align-items-center">
                                <AiOutlineCalendar />
                                Tahun 2020
                            </li>
                        </ul>
                        <div>
                            <div className="total-biaya d-flex justify-content-between">
                                <p>Total</p>
                                <p>Rp 430.000</p>
                            </div>
                            <div className="harga-mobil">
                                <p>Harga</p>
                                <div className="d-flex align-items-baseline justify-content-between">
                                    <ul>
                                        <li>1 Mobil dengan sopir</li>
                                    </ul>
                                    <ul>
                                        <li>Rp 430.000</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="harga-mobil">
                                <p>Biaya Lainnya</p>
                                <div className="d-flex align-items-baseline justify-content-between">
                                    <ul>
                                        <li>Pajak</li>
                                        <li>Biaya makan sopir</li>
                                    </ul>
                                    <ul>
                                        <li className='text-success'>Termasuk</li>
                                        <li className='text-success'>Termasuk</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="harga-mobil">
                                <p>Belum Termasuk</p>
                                <div className="d-flex align-items-baseline">
                                    <ul>
                                        <li>Bensin</li>
                                        <li>Tol dan parkir</li>
                                    </ul>
                                </div>
                            </div>
                            <hr />
                            <div className="total d-flex fw-bold align-items-baseline justify-content-between">
                                <p>Total</p>
                                <ul>
                                    <li>Rp 430.000</li>
                                </ul>
                            </div>
                            <Button block color="success">
                                Bayar
                            </Button>
                        </div>
                    </Detailpesanan>
                </Container>
                <Footer />
            </Tickethero>

        </>
    )
}

export default Pembayaran