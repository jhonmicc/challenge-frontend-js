import React from 'react'
import Header from '../Components/Header/Header'
import styled from 'styled-components'
import Footer from '../Components/Footer/Footer'
import { Container } from 'reactstrap'
import check from '../Images/check.png'
import back from '../Images/fi_arrow-left.png'
import tiga from '../Images/tiga.png'
import success from '../Images/success.png'
import Pdf from "react-to-pdf";
import { FiDownload } from 'react-icons/fi'
import './Invoice.css'

const Tickethero = styled.section`
    height: 15vh;
    background-color: #f1f3ff;
`

const Kotak = styled.div`
    width: 40%;
    height: 15%;
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    margin: 0 auto;
`

const ref = React.createRef();

const Invoice = () => {
    return (
        <>
            <Header />
            <Tickethero >
                <Container className='d-flex pt-5 justify-content-between'>
                    <div className="go-back">
                        <img src={back} alt="" />
                        <span>Tiket</span>
                        <p className='ms-4'>Order ID: xxxxxxxx</p>
                    </div>
                    <div className="step-metode d-flex">
                        <div className="pilih-metode me-5">
                            <img className='me-1' src={check} alt="" />
                            Pilih Metode
                        </div>
                        <div className="pilih-metode me-5">
                            <img className='me-1' src={check} alt="" />
                            Bayar
                        </div>
                        <div className="pilih-metode">
                            <img className='me-1' src={tiga} alt="" />
                            Tiket
                        </div>
                    </div>
                </Container>
            </Tickethero>
            <div className="pdf-download text-center mt-5">
                <figure>
                    <img src={success} alt="" />
                    <figcaption className='fw-bold'>Pembayaran Berhasil!</figcaption>
                    <p className='fw-lighter text-secondary'>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
                </figure>
                <Kotak>
                    <div className="wrapper p-4">
                        <div className="d-flex justify-content-between">
                            <h6>Invoice</h6>
                            <Pdf targetRef={ref} filename="BCR_Invoice.pdf">
                                {({ toPdf }) => <button onClick={toPdf} className="p-2 bg-white border border-primary text-primary fw-bold rounded-2" > <FiDownload /> Unduh</button>}
                            </Pdf>
                        </div>
                        <div ref={ref}>
                            <div class="invoice-card">
                                <div class="invoice-title">
                                    <div id="main-title">
                                        <h4>INVOICE</h4>
                                        <span>#89 292</span>
                                    </div>

                                    <span id="date">16/02/2019</span>
                                </div>

                                <div class="invoice-details">
                                    <table class="invoice-table">
                                        <thead>
                                            <tr>
                                                <td>PRODUCT</td>
                                                <td>UNIT</td>
                                                <td>PRICE</td>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr class="row-data">
                                                <td>Espresso <span>(large)</span></td>
                                                <td id="unit">1</td>
                                                <td>2.90</td>
                                            </tr>

                                            <tr class="row-data">
                                                <td>Cappucino <span>(small)</span></td>
                                                <td id="unit">2</td>
                                                <td>7.00</td>
                                            </tr>

                                            <tr class="calc-row">
                                                <td colspan="2">Total</td>
                                                <td>9.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </Kotak>
            </div>
            <Footer />
        </>
    )
}

export default Invoice